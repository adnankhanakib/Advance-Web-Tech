import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import {CourseService} from './course.service.js';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
    @Get()
    getAllCourses():string{
        return "Test"
    }
    @Get(":id")
    getCourseById(id:string):string{
        return "Get course by id";
    }
    @Post()
    createCourse():string{
        return "";
    }
    @Put(":id")
    updateCourse():string{
        return "";
    }
    @Patch(":id")
    patchCourse():string{
        return "";
    }
    @Delete(":id")
    deleteCourse():string{
        return "";
    }
}
