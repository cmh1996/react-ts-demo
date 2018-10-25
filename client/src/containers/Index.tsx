import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { currentUserAction, plusAction } from "@redux/actions/user";

interface IProps extends RouteComponentProps<any> {
    currentUser: any;
    num: number;
    currentUserAction: any;
    plusAction: any;
}

interface IState {
    count: number;
}

@(connect as any)(
    (state: any) => {
        return {
            currentUser: state.user.get("currentUser"),
            num: state.user.get("num")
        };
    },
    {
        currentUserAction,
        plusAction
    }
)
export default class Index extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    public routeTo(place: string) {
        this.props.history.push(place);
    }

    public render() {
        return (
            <div className="Index">
                <span>{this.state.count}</span>
                <span onClick={this.props.plusAction}>{this.props.currentUser}</span>
                <button onClick={this.routeTo.bind(this, "/user")}>uu</button>
            </div>
        );
    }
}
