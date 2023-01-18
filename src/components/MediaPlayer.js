function MediaPlayer(props) {

    function handleMediaClick() {
        const source = props.musicSource;
        console.log('clicked')
        // setUpThenAnimate(props.musicSource, props.musicContext)
    }

    return(
            <audio onClick={() => handleMediaClick} src={props.musicSource} id="audio" controls></audio>
        )
}

export default MediaPlayer;