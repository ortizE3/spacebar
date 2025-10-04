import SpaceBarButton from "../../../components/SpaceBarButton/SpaceBarButton"
import SpaceBarInput from "../../../components/SpaceBarInput/SpaceBarInput"
import SpaceBarSelect from "../../../components/SpaceBarSelect/SpaceBarSelect"
import SpaceBarTextArea from "../../../components/SpaceBarTextArea/SpaceBarTextArea"

import './HomeProject.scss'

function HomeProject() {
    return (
        <div className="flex flex-col gap-lg">
            <h4 className="sb-semibold uppercase">Custom <br /> Project?</h4>

            <div className="w-80 flex flex-col gap-lg">
                <SpaceBarInput placeholder="What do you need?"></SpaceBarInput>
                <SpaceBarTextArea placeholder="Tell us about your vision..."></SpaceBarTextArea>

            </div>

            <div className="flex flex-col">
                <label className="m-0" htmlFor="spacebar-budget-range">Budget Range:</label>
                <SpaceBarSelect id="spacebar-budget-range" className="w-60">
                    <option value="Starter Brand Kit - $500">Starter Brand Kit - $500</option>
                    <option value="Social Stack - $800">Social Stack - $800</option>
                    <option value="Commercial Mini – $1200">Commercial Mini – $1200</option>
                </SpaceBarSelect>
            </div>

            <SpaceBarButton className="home-project-button mb-xxl">Request a quote</SpaceBarButton>

            <hr className="border-1 w-100 mt-xl mb-xxxl" />
        </div>
    )
}

export default HomeProject