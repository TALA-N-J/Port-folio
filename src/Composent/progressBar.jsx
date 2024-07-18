function ProgressBar({value,max}) {
    return(
        <div className="progress-bar-wrap">
           <div className="progress-bar" style={{ width:`${value}%`}}></div>
        </div>
    );
}

export default ProgressBar