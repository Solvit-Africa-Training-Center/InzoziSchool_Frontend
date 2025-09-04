
import { Link } from 'react-router-dom';
import AuthNav from '../Components/AuthNav';
import Button from '../Components/Button';
import Footer from '../Components/Footer';

export default function SchoolPage() {
  return (
    <div className='bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] '>
        <div>
            <AuthNav/>
        </div>

        <div>
            <h1 className='text-[#282C34] text-[62px] font-family-playfair text-center py-[25px] font-semibold pt-[140px]'>
                Welcome to your Inzozi Account!
            </h1>
            <h3 className='text-center text-[15px] font-family-poppins px-[160px]'>Inzozi helps you manages applications and showcase your school. Start simplifying your work and  improving  your school visibility  by registering  it in few simple steps!</h3>
         
            <div className='py-[30px] flex justify-center pb-[160px] border-b'>
                <Link to='/schoolRegister'>
                <Button variant='newSchool' label='Register New School'/>
                </Link>
                
            </div>
        </div>

        <Footer/>
    </div>
  );
}
