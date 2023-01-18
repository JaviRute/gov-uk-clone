//This is a very small section that asks the user whether the page was useful, and it needs a bunch of props
const PageUseful = (props) => {

    //A boolean which dictates whether the section is showing or not, with its corresponding function to change the boolean
    const showPageHelpful = props.showPageHelpful;
    const handleSetShowPageHelpful = props.handleSetShowPageHelpful;
    //A boolean which dictates whether the 'Report a problem' section appears or not
    const reportProblem = props.reportProblem;
    //This function will turn the boolean to true if the user clicks on 'Report a problem'
    const handleSetReportProblem = props.handleSetReportProblem;
    //This function will simply turn the boolean to false, as the user is cancelling the action
    const handleSetReportProblemWithCancel = props.handleSetReportProblemWithCancel;
    //This function will turn the boolean to false, and show an alert acknowledging his message
    const handleSetReportProblemWithSend = props.handleSetReportProblemWithSend;

    //If the user clicks on 'Report problem' he will see this
    if (reportProblem === true) {
        return (
            <div className="report-problem">
                <div className="report-problem-container">
                    <h2>Help us improve GOV.UK</h2>
                    <p>Don’t include personal or financial information like your National Insurance number or credit card details.</p>
                    {/* This is the form for the user to enter the problem */}
                    <form>
                        <div className="report-input">
                            <label>What were you doing?</label>
                            <textarea rows="3"></textarea>
                        </div>
                        <div className="report-input">
                            <label>What went wrong?</label>
                            <textarea rows="3"></textarea>
                        </div>
                        {/* Two buttons with slightly different functions */}
                        <div>
                            <button onClick={handleSetReportProblemWithSend} className="send-button">Send</button>
                            <button onClick={handleSetReportProblemWithCancel} className="cancel-button">Cancel</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
    //This section will show by default, asking the user whether the page was useful
    if (showPageHelpful === true) {
        return (
            <div className="page-useful-section">
    
                <div className="page-useful-left">
                    <h4>Is this page useful</h4>
                    {/* Buttons for the user to say 'yes' or 'no' */}
                    <button onClick={handleSetShowPageHelpful}>Yes</button>
                    <button onClick={handleSetShowPageHelpful}>No</button>
                </div>
                {/* Buttons for the user to report a problem */}
                <div className="page-useful-right">
                    <button onClick={handleSetReportProblem}><a>Report a problem with this page</a></button>
                </div>
            </div>
        )
    } else {
        //If the user clicks 'yes/no' he will see this section
        return (
            <div className="page-useful-section">
                Thanks for your feedback
            </div>
        )
    }

};

export default PageUseful;