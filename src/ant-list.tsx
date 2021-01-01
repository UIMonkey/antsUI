import React from "react";
import { IAnt } from "./ant";

/**
 * Displays a list of ants
 */
export class AntList extends React.Component<IAnt[]> {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let ants = this.props;
        return (
            <div>
                {/* {ants.map((ant: IAnt) => {return (<div>ant.name</div>)})} */}
            </div>
        );
    }
}