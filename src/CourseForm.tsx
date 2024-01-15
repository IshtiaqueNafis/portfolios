import React from 'react';
import APIClient from "./services/api";
import {Course} from "./entities/courses";
import {Controller, SubmitHandler, useForm} from "react-hook-form";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useMutation} from "@tanstack/react-query";
import useTechStacks from "./hooks/useTechStacks";
import {MultiSelect, Option} from "react-multi-select-component";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const CourseForm = () => {
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm<Course>();

    const apiClient = new APIClient<Course>("courses");

    const AddCourses = useMutation({
        mutationFn: async (course: Course) => await apiClient.addDataTofireStore(course)

    })

    const {data:techStack, isLoading} = useTechStacks()

    if (isLoading) <p>loading</p>
    console.log(techStack)
    const options = techStack?.map(tech=>({value:tech.id,label:tech.data.name}));
    console.log(options)
    if (!techStack) {
        return <p>No data available</p>;
    }

    const onSubmit: SubmitHandler<Course> = async data => {

        console.log({data})
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("title")} />
                <input  {...register("coverImage")} placeholder={"cover Image"}/>
                <input  {...register("certificationImage")} placeholder={"certiimage Image"}/>
                <input  {...register("length")} placeholder={"length"} type={"number"}/>

                <Controller

                    render={({field}) => (
                        <SimpleMDE placeholder={"Description"} {...field}/>
                    )} name={"description"} control={control}/>

                <Controller
                    control={control}
                    name="techStackId"
                    render={({
                                 field: { onChange, onBlur, value, name, ref },
                             }) => (
                        <Select

                            options={options}
                            isLoading={isLoading}
                            onChange={onChange}
                            isMulti={true}
                            onBlur={onBlur}
                            value={value}
                            name={name}
                            ref={ref}

                        />
                    )}/>


                <textarea  {...register("summary")} />
                <input type="submit"/>
            </form>

        </div>
    );
};

export default CourseForm;