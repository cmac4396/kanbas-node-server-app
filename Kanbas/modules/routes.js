import * as dao from "./dao.js";
function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.createModule(cid, req.body);
    res.json(module);
  };
  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  };
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };
  const findAllModulesByCourse = async (req, res) => { 
    const { cid } = req.params;
    const modules = await dao.findAllModulesByCourse(cid);
    res.json(modules);
  };

  
    app.put("/api/modules/:mid", updateModule);    
    app.delete("/api/modules/:mid", deleteModule);
    app.post("/api/courses/:cid/modules", createModule);    
  app.get("/api/courses/:cid/modules", findAllModulesByCourse);
}
export default ModuleRoutes;