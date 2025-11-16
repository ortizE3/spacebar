import { useState } from "react"
import SpaceBarButton from "../../../components/SpaceBarButton/SpaceBarButton"
import SpaceBarInput from "../../../components/SpaceBarInput/SpaceBarInput"
import SpaceBarSelect from "../../../components/SpaceBarSelect/SpaceBarSelect"
import SpaceBarTextArea from "../../../components/SpaceBarTextArea/SpaceBarTextArea"

import './HomeProject.scss';

const errorMessage = 'This field is required'

function HomeProject() {

    const [subject, setSubject] = useState('');
    const [title, setTitle] = useState('');

    const [subjectError, setSubjectError] = useState(false);
    const [titleError, setTitleError] = useState(false);

    const [selection, setSelection] = useState('Starter Brand Kit - $500');


    const submitEmail = () => {
        if (!subject) {
            setSubjectError(true);
        }

        if (!title) {
            setTitleError(true);
        }

        if (!title || !subject) {
            return;
        }

        const emailSubject = `Spacebar Inquiry: ${title}`;
        const emailBody = `${subject}%0A%0A${selection}`;

        window.open(`mailto:spacebarcreative@gmail.com?subject=${emailSubject}&body=${emailBody}`)
    }

    var onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var currTitle = event.target.value
        setTitle(currTitle);

        if (currTitle) {
            setTitleError(false)
        }
    }

    var onSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var currSubject = event.target.value
        setSubject(currSubject);

        if (currSubject) {
            setSubjectError(false)
        }
    }


    return (
        <div className="flex flex-col gap-lg">
            <h1 className="sb-semibold uppercase">Custom <br /> Project?</h1>

            <div className="flex flex-col gap-lg home-project-input ">
                <div>
                    <SpaceBarInput id='email-title' placeholder="What do you need?" onChange={onTitleChange} error={titleError} errorMessage={errorMessage}></SpaceBarInput>
                </div>

                <div>
                    <SpaceBarTextArea id='email-body' placeholder="Tell us about your vision..." onChange={onSubjectChange} error={subjectError} errorMessage={errorMessage}></SpaceBarTextArea>
                </div>

            </div>

            <div className="flex flex-col">
                <label className="m-0" htmlFor="spacebar-budget-range">Budget Range:</label>
                <SpaceBarSelect id="spacebar-budget-range" className="home-project-select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelection(event.target.value)
                }}>
                    <option value="Starter Brand Kit - $500">Starter Brand Kit - $500</option>
                    <option value="Social Stack - $800">Social Stack - $800</option>
                    <option value="Commercial Mini – $1200">Commercial Mini – $1200</option>
                </SpaceBarSelect>
            </div>

            <SpaceBarButton onClick={submitEmail} className="home-project-button mb-xxl" >Request a quote</SpaceBarButton>
            <hr className="border-1 w-100 mt-xl mb-xxxl" />
        </div>
    )
}

export default HomeProject