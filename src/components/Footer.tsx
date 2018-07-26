import React, { CSSProperties, HtmlHTMLAttributes } from "react"
import styled from "styled-components"
import { Divider } from "semantic-ui-react"

const FooterDiv = styled.div`
    padding: 0px;
    position: fixed;
    display: block;
    width: 100%;
    height: 40px;
    color: white;
    bottom: 0;
`

export class Footer extends React.Component<{ style?: CSSProperties }> {
    public render() {
        return (
            <FooterDiv style={this.props.style}>
                Config Editor 0.1.0
            </FooterDiv>
        )
    }
}