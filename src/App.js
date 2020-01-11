import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';




class App extends Component  {
  state={
      inputValue:'sad',
      input1Value:'',
      anchorEl:false
  }


  changeData=(event)=>{
     this.setState({input1Value:event.target.value})
     //   this.state.inputValue=4;
    }

  microsoftClickHandler=()=>{
      document.getElementById('micID').style.display='block';
  }  
  render(){
  return (
    <div className="App">
  
     

<div class="container">
  <div class="row" style={{display:'flex'}}>
    <div id="hello3"class="col-sm">

    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div style={{display:'flex'}}>
    <div className="App-logo">
      <img src={require('./img/microsoft.png')} alt="Logo" />
    </div>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" >Office </a>
      <a id="hello" class="nav-link dropdown-toggle" data-toggle="dropdown">Windows</a>
      <a id="hello1"class="nav-item nav-link" >Support</a>
   
    </div>
  </div>
</nav>
    </div>
    <div id="hello4"class="col-sm">
     
    </div>
    <div id="hello5" class="col-sm">

    <Button aria-controls="simple-menu" onClick={this.microsoftClickHandler}>
  All Microsoft
</Button>


      
    </div>
  </div>
</div>


<div id="micID">
  

  <span style={{marginLeft:'1240px',cursor:'pointer'}} onClick={()=>document.getElementById('micID').style.display='none'}>X</span>

  <div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="col1" >
      <h5>Software</h5>
    </div>
    <div class="col2">
    <h5>PC and Devices</h5>
    </div>
    <div class="col3">
    <h5>Entertainment</h5>
    </div>

    <div class="col4">
    <h5>Buisness</h5>
    </div>
    <div class="col5">
    <h5>Developer and IT</h5>
    </div>
    <div class="col6">
    <h5>Other</h5>
    </div>



  </div>
</div>
 





<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="col_it1" >
      <font size="2">One Drive</font>
    </div>
    <div class="col_it2">
    <font size="2">PC and tablets</font>
    </div>
    <div class="col_it3">
    <font size="2">X Box Games</font>
    </div>

    <div class="col_it4">
    <font size="2">Microsoft Azure</font>
    </div>
    <div class="col_it5">
    <font size="2">.Net</font>
    </div>
    <div class="col_it6">
    <font size="2">Microsoft Store</font>
    </div>

  </div>
</div>



<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="col_it1" >
      <font size="2">Outlook</font>
    </div>
    <div class="col2_r3">
    <font size="2">Accessories</font>
    </div>
    <div class="col3_r3">
    <font size="2">Windows Digital Games</font>
    </div>

    <div class="col4_r3">
    <font size="2">Microsoft Dynamics 365</font>
    </div>
    <div class="col5_r3">
    <font size="2">Visual Studio</font>
    </div>
    <div class="col6_r3">
    <font size="2">Free Download and Security</font>
    </div>

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="col_it1" >
      <font size="2">Skype</font>
    </div>
    
    <div class="col4_r4">
    <font size="2">Microsoft 365</font>
    </div>
    <div class="col5_r4">
    <font size="2">Windows Server</font>
    </div>
    <div class="col6_r4">
    <font size="2">Education</font>
    </div>

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="col_it1" >
      <font size="2">OneNote</font>
    </div>
    
    <div class="col4_r5">
    <font size="2">Microsoft Industry</font>
    </div>
    <div class="col5_r5">
    <font size="2">Windows Dev Center</font>
    </div>
    

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    
    
    <div class="col4_r6">
    <font size="2">Data Platforms</font>
    </div>
    <div class="col5_r6">
    <font size="2">Docs</font>
    </div>
    
  </div>
</div>

  </div>
    

<div class="mycarousel">
  
 
  <Carousel showThumbs={false} width="91%" >
                <div>
                    <img src={require('./img/img1.png')}/>
                   
                </div>
                <div>
                    <img src={require('./img/img2.png')}/>
                    
                </div>
                
</Carousel>
</div>

<div class="cardName">


<div class="container">
  <div class="row" style={{display:'flex'}}>

    <div class="col-sm1">
    <img src={require('./img/c1.png')}/>
    <h3>Microsoft Store</h3>
    <p>Find what you need for home, school, work and fun.</p>
    <a class="c-call-to-action c-glyph" aria-label="SHOP AT THE MICROSOFT STORE" data-m="{&quot;cN&quot;:&quot;SHOP AT THE MICROSOFT STORE&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c1m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c1m1r2a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_51292_26491_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_51292_26491_161_a&quot;}}" href="https://www.microsoft.com/en-pk/store/b/home">
                <span>SHOP AT THE MICROSOFT STORE</span>
            </a>
    </div>


    <div class="col-sm2">
    <img src={require('./img/c2.png')}/>
    <h3>Windows Ink</h3>
    <p>Write place at the right time</p>
    <a class="c-call-to-action c-glyph" aria-label="MEET WINDOWS INK" data-m="{&quot;cN&quot;:&quot;MEET WINDOWS INK&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c2m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c2m1r2a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_80132_33007_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_80132_33007_161_a&quot;}}" href="https://www.microsoft.com/en-za/windows/windows-ink">
                <span>MEET WINDOWS INK</span>
            </a>
    </div>


    <div class="col-sm3">
    <img src={require('./img/c3.png')}/>
    <h3>One Note</h3>
    <p>Organise your notes and your life.</p>
    <a class="c-call-to-action c-glyph" aria-label="DOWNLOAD ONENOTE FOR FREE" data-m="{&quot;cN&quot;:&quot;DOWNLOAD ONENOTE FOR FREE&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c3m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c3m1r2a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_51403_26941_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_51403_26941_161_a&quot;}}" href="http://onenote.com?omkt=en-pk?Wt.mc_id=oan_mscom_prog_onenote_evergreen">
                <span>DOWNLOAD ONENOTE FOR FREE</span>
            </a>
    </div>


    <div class="col-sm4">
    <img src={require('./img/c4.png')}/>
    <h3>Outlook for IOS and Andriod</h3>
    <p>Connect. Organise. Get things done.</p>
    <a class="c-call-to-action c-glyph" aria-label="Get the Outlook app now" data-m="{&quot;cN&quot;:&quot;DOWNLOAD NOW&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c4m1r2a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c4m1r2a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_100622_53049_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_100622_53049_161_a&quot;}}" href="https://aka.ms/MCOMcampaignMarch2019">
                <span>DOWNLOAD NOW</span>
            </a>
    </div>

  </div>
</div>

  </div>
     
     <div class="pic2">
     <img src={require('./img/img3.png' )} />

       </div>

<div class="cardName2">
<div class="container">
  <div class="row" style={{display:'flex'}}>

    <div class="col-sm5">
    <img src={require('./img/c5.png')}/>
    <h3>Windows 10 Enterprise</h3>
    <p>Download the free 90-day evaluation for IT professionals.</p>
    <a class="c-call-to-action c-glyph" aria-label="DOWNLOAD WINDOWS 10 ENTERPRISE" data-m="{&quot;cN&quot;:&quot;DOWNLOAD NOW&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c1m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c1m1r4a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_94549_37803_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_94549_37803_161_a&quot;}}" href="https://www.microsoft.com/en-us/evalcenter/evaluate-windows-10-enterprise">
                <span>DOWNLOAD NOW</span>
            </a>
    </div>


    <div class="col-sm6">
    <img src={require('./img/c6.png')}/>
    <h3>Office 365 for Business</h3>
    <p>Access your files from anywhere, online or offline.</p>
    <a class="c-call-to-action c-glyph" aria-label="Shop for Office 365 for Business" data-m="{&quot;cN&quot;:&quot;SHOP NOW&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c2m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c2m1r4a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_94586_47480_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_94586_47480_161_a&quot;}}" href="https://products.office.com/en/compare-all-microsoft-office-products?tab=2&amp;OCID=AID679471_OO_HLW_mscomrefresh">
                <span>SHOP NOW</span>
            </a>
    </div>


    <div class="col-sm7">
    <img src={require('./img/c7.png')}/>
    <h3>Get Visual Studio 2019</h3>
    <p>Download the free 90-day evaluation for IT professionals.</p>
    <a class="c-call-to-action c-glyph" aria-label="Download Visual Studio 2019 now" data-m="{&quot;cN&quot;:&quot;DOWNLOAD NOW&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c3m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c3m1r4a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_95022_52567_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_95022_52567_161_a&quot;}}" href="https://visualstudio.microsoft.com/downloads/?utm_medium=post-banner&amp;utm_source=microsoft.com&amp;utm_campaign=channel+banner&amp;utm_content=launch+vs2019">
                <span>DOWNLOAD NOW</span>
            </a>
    </div>


    <div class="col-sm8">
    <img src={require('./img/c8.png')}/>
    <h3>Microsoft Teams</h3>
    <p>Get a shared workspace for team conversations, files and apps in the new hub for teamwork.</p>
    <a class="c-call-to-action c-glyph" aria-label="Start using Microsoft Teams for free" data-m="{&quot;cN&quot;:&quot;GET STARTED FOR FREE&quot;,&quot;cT&quot;:&quot;0&quot;,&quot;id&quot;:&quot;n1c4m1r4a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;c4m1r4a2&quot;,&quot;assetid&quot;:&quot;SSAGPTSS_100153_46693_161_a&quot;,&quot;tags&quot;:{&quot;ms.linkid&quot;:&quot;SSAGPTSS_100153_46693_161_a&quot;}}" href="https://products.office.com/en/microsoft-teams/free?OCID=AID679471_OO_HLW_MSTeamsFree">
                <span>GET STARTED FOR FREE</span>
            </a>
    </div>

  </div>
</div>

  </div>

    <div class="icons" style={{display:'flex'}}>
      
    <span> Follow Microsoft </span>      
         
      <a data-m="{&quot;id&quot;:&quot;n1m1r5a2&quot;,&quot;sN&quot;:1,&quot;aN&quot;:&quot;m1r5a2&quot;}" itemprop="sameAs" href="https://www.facebook.com/MSFTPK/" title="Follow Microsoft on Facebook">
                <picture>
                <FaFacebookSquare size={25} color={"blue"}/> 
                </picture>
            </a>
   
            <a data-m="{&quot;id&quot;:&quot;n2m1r5a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;m1r5a2&quot;}" itemprop="sameAs" href="https://twitter.com/ms_pakistan" title="Follow Microsoft on Twitter">
                <picture>
                <FaTwitterSquare size={25} color={"blue"}/>  
                </picture>
            </a>
      
            <a data-m="{&quot;id&quot;:&quot;n3m1r5a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;m1r5a2&quot;}" itemprop="sameAs" href="https://www.linkedin.com/company/microsoft" title="Follow Microsoft on LinkedIn">
                <picture>
                <FaLinkedin size={25} color={"blue"}/> 
                </picture>
            </a>
    
      </div>



<div class="footerid">

<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="f_r1_c1" >
      <h4>Microsoft Store</h4>
    </div>
    <div class="f_r1_c2">
    <h4>Education</h4>
    </div>
    <div class="f_r1_c3">
    <h4>Enterprise</h4>
    </div>

    <div class="f_r1_c4">
    <h4>Developer</h4>
    </div>
    <div class="f_r1_c5">
    <h4>Company</h4>
    </div>
    

  </div>
</div>

<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="f_r2_c1" >
      <font size="1">Account profile</font>
    </div>
    <div class="f_r2_c2">
    <font size="1">Office 365 for school</font>
    </div>
    <div class="f_r2_c3">
    <font size="1">Microsoft Azure</font>
    </div>

    <div class="f_r2_c4">
    <font size="1">Microsoft Visual studio</font>
    </div>
    <div class="f_r2_c5">
    <font size="1">careers</font>
    </div>
    

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="f_r3_c1" >
      <font size="1">Download Center</font>
    </div>
    
    <div class="f_r3_c3">
    <font size="1">Microsoft partner resources</font>
    </div>

    <div class="f_r3_c4">
    <font size="1">channel 9</font>
    </div>
    <div class="f_r3_c5">
    <font size="1">About Microsoft</font>
    </div>
    

  </div>
</div>



<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="f_r4_c1" >
      <font size="1">Returns</font>
    </div>

    <div class="f_r4_c4">
    <font size="1">office Dev center</font>
    </div>
    <div class="f_r4_c5">
    <font size="1">Company news</font>
    </div>
    

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    <div class="f_r5_c1" >
      <font size="1">Order Tracking</font>
    </div>
   
    <div class="f_r5_c5">
    <font size="1">Privacy at Microsoft</font>
    </div>
    

  </div>
</div>


<div class="container" >
  <div class="row" style={{display:'flex'}}>
    
   
    <div class="f_r6_c5">
    <font size="1">Investors</font>
    </div>
    

  </div>
</div>


  </div>






    </div> 
  );
  }
}

export default App;
