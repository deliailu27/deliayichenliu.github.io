import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile=()=>{

    const githubUrl=(e)=>{
        e.preventDefault();
        window.location='https://github.com/deliailu27'
    }

    const linkedInUrl=(e)=>{
        e.preventDefault();
        window.location='https://www.linkedin.com/in/delia-l-164abb138/'
    }

return (
    <>
    <div className="profile">
        <div className="picture">
            <img alt='profile' src={require('../../assests/IMG_7053.JPG')}/>
        </div>
        <div className='profile-content'>
            Henlo
            <div className='intro'>My name is Delia, <br/><br/>I am a junior full-stack developer and a philosopher.<br/><br/>
            I am interested in machine ethics, <br/><br/>I work on evaluating artifical moral agencts <br/>and know a lot about different trolley problems. 
            <br/><br/>
            <div className='icon' onClick={githubUrl}><GitHubIcon fontSize="large"/></div>
            <div className='icon' onClick={linkedInUrl}><LinkedInIcon fontSize="large"/></div>
            
            
            </div>
        </div>
    </div>
    </>
)

}

export default Profile