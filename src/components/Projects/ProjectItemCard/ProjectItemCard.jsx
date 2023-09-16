import "./ProjectItemCard.css"
import { motion } from "framer-motion"
import ProjectImage from "../ProjectImage/ProjectImage"

const ProjectItemCard = ( {title, description, imgPath} ) => {
 
  return (
    <motion.div animate={{scale: [0, 1]}} transition={{duration: 0.5}} className="mx-auto">
        <div className="proj-imgbx border-[1px] border-border_color2 flex hover:shadow-md hover:shadow-neon_color2 
          h-[270px]" 
        >
          <ProjectImage 
            imgPath = { imgPath }
            title = { title }
          />
          
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
    </motion.div>
      

  );
}

export default ProjectItemCard;