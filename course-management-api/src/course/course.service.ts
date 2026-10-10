import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses():string{
        return "Get All Courses - from Service"
    }
    getCourseById(id:string):string{
        return "Get course with ID: 10 - from Service"
    }
    createCourse():string{
        return "Create course - from Service"
    }
    updateCourse(id:string):string{
        return "Update Course 10 - from Service"
    }
    patchCourse(id:string):string{
        return "Patch Course 10 - from Service"
    }
    deleteCourse(id:string):string{
        return "Delete Course 10 - from Service"
    }
}
