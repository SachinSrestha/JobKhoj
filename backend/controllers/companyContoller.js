import asyncHandler from "express-async-handler";
import {Company} from "../models/companyModel.js";
import { User } from "../models/userModel.js";
import { getDataURI } from "../utils/generateURL.js";
import cloudinary from '../utils/cloudinary.js';

export const registerCompany = asyncHandler(async (req,res)=>{
    const {name, description, website, location} = req.body;
    const user = await User.findById(req.user._id);

    const file = req.file;
    const fileURI = getDataURI(file);
    const cloudData = await cloudinary.uploader.upload(fileURI.content);

    if(!name || !location){
        res.status(400);
        throw new Error("All Fields are Mandatory!");
    }

    let company = await Company.findOne({name});
    if(company){
        res.status(400);
        throw new Error("Company already exists!");
    }

    const userId = req.user._id

    const desc = description? description : description;
    const web = website? website : website;


    company = await Company.create({
        name,
        location,
        description:desc,
        website:web,
        userId,
        logo: cloudData?.secure_url
    })

    user.profile.company.push(company._id);

    await user.save();
    await company.save();

    res.status(200).json({
        company,
        message:"Company Registered Succesfully",
        success:true
    })
})

export const getCompany = asyncHandler(async (req,res)=>{
    const userId = req.user._id;

    const companies = await Company.find({userId});

    if(!companies){
        res.status(404);
        throw new Error("No companies found");
    }

    res.status(200).json({companies, success:true});
})

export const getCompanyById = asyncHandler(async (req,res)=>{
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if(!company){
        res.status(404);
        throw new Error("No company found");
    }

    res.status(200).json({company, success:true});
})

export const updateCompany = asyncHandler(async (req,res)=>{
    const {name,description,website,location} = req.body;
    const companyId = req.params.id;
    const currentCompany = await Company.findById(companyId);
   
    let logo = currentCompany.logo; 

    if (req.file) {
        const file = req.file;
        const fileURI = getDataURI(file);
        const cloudData = await cloudinary.uploader.upload(fileURI.content); 
        logo = cloudData.secure_url; 
    }

    
    const updatedData = {name,description,website,location,logo};


    let company =await Company.findByIdAndUpdate(companyId, updatedData, {new:true});

    if(!company){
        res.status(404);
        throw new Error("No company found");
    }

    if(req.user._id.toString() !== company.userId.toString()){
        res.status(401);
        throw new Error("UnAuthorized");
    }

    await company.save();

    res.status(200).json({
        company,
        message:"Company Updated Succesfully",
        success:true
    })
})