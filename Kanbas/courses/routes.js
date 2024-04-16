import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  }
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };
  const findCourseById = async (req, res) => { 
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    res.json(course);
  };
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
      app.put("/api/courses/:id", updateCourse);
      app.get("/api/courses/:id", findCourseById);
  app.get("/api/courses", findAllCourses);
}
