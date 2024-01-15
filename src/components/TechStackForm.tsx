import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {TechStack} from "../entities/techStack";
import APIClient from "../services/api";

type Inputs = {
    name: string,
    URL: string,
};
const TechStackForm = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const apiClient = new APIClient<TechStack>("techStack");

    const AddTechStack = useMutation({
        mutationFn: async (techStack: TechStack) => await apiClient.addDataTofireStore(techStack)

    })
    const onSubmit: SubmitHandler<TechStack> = async data => {

        try {
            await AddTechStack.mutateAsync(data)
        } catch (e) {
            console.error(e.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="name" {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("URL", {required: true})} />
                {/* errors will return when field validation fails  */}
                {errors.URL && <span>This field is required</span>}

                <input type="submit"/>
            </form>
        </div>
    );
};

export default TechStackForm;