import {FaGithubAlt, FaJava, FaNodeJs, FaPython} from "react-icons/fa";
import {
    SiBootstrap,
    SiCss3,
    SiFirebase,
    SiFlask,
    SiIntellijidea,
    SiJavascript,
    SiMongodb,
    SiOracle,
    SiPycharm,
    SiRedux,
    SiRider,
    SiVisualstudiocode,
    SiWebstorm
} from "react-icons/si";
import {DiLinux, DiPhp, DiVisualstudio} from "react-icons/di";
import {RiHtml5Fill} from "react-icons/ri";
import {GrMysql, GrReactjs} from "react-icons/gr";
import {AiFillWindows} from "react-icons/ai";

export const languages = [{icon: <FaJava/>}, {icon: <FaPython/>}, {icon: <SiJavascript/>}, {icon: <DiPhp/>}]

export const webTools = [{icon: <RiHtml5Fill/>}, {icon: <SiCss3/>}, {icon: <SiBootstrap/>}, {icon: <SiFlask/>}, {
    icon: <GrReactjs/>
}, {icon: <SiRedux/>}, {icon: <FaNodeJs/>}];

export const database = [{icon: <SiMongodb/>}, {icon: <GrMysql/>}, {icon: <SiOracle/>}, {icon: <SiFirebase/>}]

export const toolsPlatform = [{icon: <FaGithubAlt/>}, {icon: <SiPycharm/>}, {icon: <SiIntellijidea/>},
    {icon: <SiRider/>}, {icon: <SiWebstorm/>},
    {icon: <DiVisualstudio/>}, {icon: <SiVisualstudiocode/>}, {icon: <AiFillWindows/>}, {icon: <DiLinux/>}]