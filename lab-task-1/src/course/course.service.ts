import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses():string{
        return "Get All Courses - from Service"
    }
    getCourseById():string{
        return "Get course with ID: 10 - from Service"
    }
    createCourse():string{
        return "Create course - from Service"
    }
    updateCourse():string{
        return "Update Course 10 - from Service"
    }
    patchCourse():string{
        return "Patch Course 10 - from Service"
    }
    deleteCourse():string{
        return "Delete Course 10 - from Service"
    }
}
