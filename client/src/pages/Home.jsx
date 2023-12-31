import {React} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation

} from '../config/motion'
import state from '../store'
import { CustomButton } from '../components'
const Home = () => {

  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
       {snap.intro && (
        <motion.div className= "home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
                <img src = './threejs.png'
                alt= "logo"
                className = "w-8 h-8 object-conttain"/>

            </motion.header>

            <motion.div className= "home-centent" {...
        headContainerAnimation}>
            <motion.div {...headTextAnimation}>
                <h1 className= "head-text">
                    LET'S <br className='x1:block hidden' /> DO IT 
                </h1>
            </motion.div>
                "
            <motion.div {...headContentAnimation}
                className = "flex flex-col gap-5 "
                >
                <p className='max-w-md font-normal text-gray-600 tetxt-base'> 
                    Create your unique and exclusive shirt with your brand new 3D 
                    custimization tool <strong> Unleash your imagination</strong> {" "} 
                    and define your own style.
                </p>
                <CustomButton
                    type = "filled"
                    title = "Customize It"
                    handleClick = {() => state.intro = false}
                    customStyles = " w-fit px-4 py-2.5 font-bold text-sm"
                />
            </motion.div>
        </motion.div>





        </motion.div>
       )} 
    </AnimatePresence>
  )
}

export default Home
