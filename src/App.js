import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import React, { useState } from 'react';
import HTMLFlipBook from "react-pageflip";
import GifPlayer from 'react-gif-player';
import ReactDOM from 'react-dom';
import dog from './sound/dogBark.mp3';
import useSound from 'use-sound';
import doggif from './image/dogWave2.gif';
import dogpic from './image/dogWave.jpg';
import dogplaygif from './image/dogPlay.gif';
import cowpic from './image/cow.jpg';
import cowgif from './image/cowWave.gif';
import cow from './sound/cowSound.mp3';
import cowplaygif from './image/cowPlay.gif';
import duck from './sound/duckSound.mp3';
import duckpic from './image/duck.jpg';
import duckgif from './image/duckWave.gif';
import duckplaygif from './image/duckPlay.gif';
import roosterpic from './image/rooster.jpg';
import roostergif from './image/roosterWave.gif';
import rooster from './sound/roosterSound.mp3';
import roosterplaygif from './image/roosterPlay.gif';
import bandpic from './image/band.jpg';
import piano from './sound/piano.wav';
import drums from './sound/drums.wav';
import guitar from './sound/guitar.wav';
import duckSing from './sound/duckSing.mp3';
import bandplaygif from './image/bandplaygif.gif';
import * as $ from 'jquery'; 
import "./App.scss";


function MyBook(props) {
    //page cover as a react component
    const PageCover = React.forwardRef((props, ref) => {
                        
    return (
    
        <div className="page page-cover" ref={ref} data-density="hard">
            <div id="imgcover"></div>
        
            <div className="page-content-cover">
                <h2 className="covertitle">{props.children}</h2>
                <p>{props.text}</p>
            </div>
        
        <div id="imgcovermirror"></div>
        
      </div>
    );
  });
    
  // page as a react component
    const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <h2 className="page-header">{props.name}</h2>
                <div className="page-image"><img id={props.id} src={props.picture} alt={props.alternate}></img></div>
                <div className="page-text">{props.children}</div>
                <div className="page-footer">{props.number}</div>
            </div>
        </div>
    );
  });
    
  return (
      <div id="outer">
        <div id="inner">
      
            <SpeechRec/>
        
            <HTMLFlipBook 
                width={550}
                height={750}
                size="stretch"
                minWidth={315}
                maxWidth={1250}
                minHeight={400}
                maxHeight={669}
                maxShadowOpacity={0.5}
                showCover={true}
                drawShadow={true}
                mobileScrollSupporth={true}>

                <PageCover>FOUR IN A BAND</PageCover>

                <Page number={'1'} name={'The Band'} picture={bandpic} alternate={'Image of the band'}>Once upon a time, there was a great animal band. It consisted of ARCHIE, KENNY, HARPER and RICKY.</Page>

                <Page number={'2'} name={'Archie'} id={'dog'} picture={dogpic} alternate={'Image of dog'}>The band was formed by Archie, the dog. He plays piano.</Page>

                <Page number={'3'} name={'Kenny'} id={'cow'} picture={cowpic} alternate={'Image of cow'}>Another artist of the band is Kenny, the cow. Kenny plays drums.</Page>

                <Page number={'4'} name={'Harper'} id={'duck'} picture={duckpic} alternate={'Image of duck'}>The third musician is Harper, the duck. Harper sings terribly good.</Page>

                <Page number={'5'} name={'Ricky'} id={'rooster'} picture={roosterpic} alternate={'Image of rooster'}>Finally, the last member of the band is Ricky, the rooster. Ricky toppingly plays guitar.</Page>

                <Page number={'6'} name={'The Band'} id={'band'} picture={bandpic} alternate={'Image of the band'}>They are the four animals in the band now playing together. </Page>

                <PageCover text={'Designed and developed by Jozsef Dani. Animations by Krzysztof Nowakowski.'}>THE END</PageCover>


            </HTMLFlipBook>
        </div>
    </div>
  );
}

//speech recognition function
const SpeechRec = () => {
    
    const {transcript, resetTranscript}= useSpeechRecognition();
    console.log(transcript);
   
    
    const [playDog] = useSound(dog,{
    
        onend: () => {

            $("#dog").attr("src",dogpic);
  
        }
    });
    
    const [playCow] = useSound(cow,{
    
        onend: () => {

            $("#cow").attr("src",cowpic);

        }
    });
    
    const [playDuck] = useSound(duck,{
    
        onend: () => {
        
            $("#duck").attr("src",duckpic);
  
        }
    });
    
    const [playRooster] = useSound(rooster,{
    
        onend: () => {
        
            $("#rooster").attr("src",roosterpic);
  
        }
    });
    
    const [playPiano] = useSound(piano,{
    
        onend: () => {
        
            $("#dog").attr("src",dogpic);
            $("#band").attr("src",bandpic);
  
        }
    });
    
    const [playDrums] = useSound(drums,{
    
        onend: () => {
        
            $("#cow").attr("src",cowpic);
  
        }
    });
    
    const [playGuitar] = useSound(guitar,{
    
        onend: () => {
        
            $("#rooster").attr("src",roosterpic);
  
        }
    });
    
    const [playDuckSing] = useSound(duckSing,{
        onend: () => {
        
            $("#duck").attr("src",duckpic);
  
        }
    });
    
    //the if conditions below check for keyword in the transcript and trigger actions
    if(transcript.includes("dog")){
        
        console.log("dog");
    
        playDog();
    
        $("#dog").attr("src",doggif);
     
        resetTranscript(); 
    }
    
    if(transcript.includes("cow")){
        
        console.log("cow");
    
        playCow();
    
        $("#cow").attr("src",cowgif);
      
        resetTranscript();
    }
    
    if(transcript.includes("duck")||transcript.includes("dark")){
        
        console.log("duck");
    
        playDuck();
    
        $("#duck").attr("src",duckgif);
      
        resetTranscript();
    }
    
    if(transcript.includes("rooster")){
        
        console.log("rooster");
    
        playRooster();
    
        $("#rooster").attr("src",roostergif);
      
        resetTranscript();
    }
    
    if(transcript.includes("piano")){
        
        console.log("piano");

        playPiano();

        $("#dog").attr("src",dogplaygif);

        resetTranscript();
    }
    
    if(transcript.includes("drums")){
        
        console.log("drums");

        playDrums();

        $("#cow").attr("src",cowplaygif);

        resetTranscript();
    }
    
    if(transcript.includes("guitar")){
        
        console.log("guitar");

        playGuitar();

        $("#rooster").attr("src",roosterplaygif);

        resetTranscript();
    }
    
    if(transcript.includes("playing together")){
        
        console.log("together");

        playGuitar();
        playDrums();
        playPiano();
        playDuckSing();

        $("#band").attr("src",bandplaygif);

        resetTranscript();
    }
    
    if(transcript.includes("sings")||transcript.includes("scenes")){
        
        console.log("sing");

        playDuckSing();

        $("#duck").attr("src",duckplaygif);

        resetTranscript();
    }
  
    const start = () => {
        
        SpeechRecognition.startListening({language: 'en-GB', continuous: true});
    }
  
    const stop = () => {
        
    SpeechRecognition.stopListening();
    }
  
  
    if (SpeechRecognition.browserSupportsSpeechRecognition()===false) {
        
        return <p>No browser support</p>
  }
  
    return (
    
        <div id="buttons">
              <button id="mon" onClick={start}>Turn On Microphone</button> 
              <button id="moff" onClick={stop}>Turn Off Microphone</button>

        </div>
  )
}

export default MyBook;