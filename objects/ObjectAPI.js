//destructuring

const Course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Himanshu"
}

//course.courseInstructor se aacha neeche wala use kar lo

const {courseInstructor} = Course;

console.log(courseInstructor);

const {courseInstructor:instructor} = Course;

console.log(instructor);

/**
 * const navbar = ({company})=>{
 * 
 * }
 * navbar(company = "Himanshu");
 * 
 * //Json++++++++++++++++++++++++++++++++++++++++++
 * json as object
 * {
 *       "name" : "hitesh",
 *        "coursename" : "js in hindi",
 *         "price" : "free"  
 * 
 * }
        json as array
        [
         
        {},

        {}
        
        
        ]
 */



