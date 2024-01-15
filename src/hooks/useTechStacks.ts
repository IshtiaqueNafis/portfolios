import {useQuery} from "@tanstack/react-query";
import {Course} from "../entities/courses";
import {TechStack} from "../entities/techStack";
import APIClient from "../services/api";
const apiClient = new APIClient<TechStack>('techStack')
const useTechStacks = ()=> useQuery<TechStack[],Error>({

    queryKey: ['techStack'],
    queryFn: async () => await apiClient.getDatasFromFireStore()


})
export default useTechStacks;