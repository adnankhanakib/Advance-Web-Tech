import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import {CourseService} from './course.service.js';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
    @Get()
    getAllCourses():string{
        return this.courseService.getAllCourses();
    }
    @Get(":id")
    getCourseById(id:string):string{
        return this.courseService.getCourseById();
    }
    @Post()
    createCourse():string{
        return this.courseService.createCourse();
    }
    @Put(":id")
    updateCourse():string{
        return this.courseService.updateCourse();
    }
    @Patch(":id")
    patchCourse():string{
        return this.courseService.patchCourse();
    }
    @Delete(":id")
    deleteCourse():string{
        return this.courseService.deleteCourse();
    }
}
