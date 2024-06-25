import { configs } from "../configs/env";

export const getProjects = async () => {
  const res = await fetch(`${configs.API_URL}/projects`);
  const json = await res.json();
  return json;
};

export const deleteProject = async (id: number) => {
  const res = await fetch(`${configs.API_URL}/projects/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  return json;
};
