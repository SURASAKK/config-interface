import React from "react"
import { TextArea, Button } from "semantic-ui-react"
import MonacoEditor from "react-monaco-editor";
import styled from "styled-components"
import { Node } from "../share/searchApi";
import { Header, Icon, Segment, Modal } from "semantic-ui-react"
import "../css/Body.css"
import { throws } from "assert";

const ContentDiv = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;
  display: block;
  max-width: 100%;
  width: 100%;
`
type Props = {
    ProjectContent: string
    // tslint:disable-next-line:variable-name
    onChange: (string) => void
    // tslint:disable-next-line:variable-name
    onDemo: () => void
    // tslint:disable-next-line:variable-name
    onContentChange: (string) => void
    extention: string
    demoText: string
    selectNode: Node
    projectPath: string
    pass: boolean
}
type State = {
    pattern: string
    open: boolean
}
export class FileContent extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            pattern: "",
            open: false
        }
        this.handleContentChange = this.handleContentChange
    }
    public handleContentChange = (data) => {
        this.props.onContentChange(data);
        // this.setState({ projectContent: data })
    }
    /*public componentWillReceiveProps(props: Props) {
        this.state = {
            projectContent: props.ProjectContent,
            pattern: this.state.pattern,
            open: this.state.open
        }
    }*/
    public onDemo = () => {
        this.setState({ open: true })
        this.props.onDemo()
    }
    public onSave = (e) => {
        console.log("onSave")
        this.props.onChange(this.props.demoText)
        this.setState({ open: false })
    }
    public close = () => this.setState({ open: false })
    public render() {
        const options = {
            minimap: { enabled: false },
            automaticLayout: true,
            rulers: [150]
        } as any;
        const onlyShow = {
            minimap: { enabled: false },
            automaticLayout: true,
            rulers: [150],
            readOnly: true
        } as any;
        const contentStyle = {
            maxWidth: "600px",
            width: "90%"
        };
        return (
            <div>
                {}
                {console.log("here: " + this.props.extention)}
                {console.log("pattern: " + this.state.pattern)}
                <ContentDiv>
                    <Segment>
                        <Header as="h5">
                            <Icon name="edit" />
                            <Header.Content>Content : {this.props.projectPath}</Header.Content>
                        </Header>
                        <MonacoEditor options={options} language={this.props.extention} width="100%" height="80%" theme="vs-light" max-width="100%"
                            value={this.props.ProjectContent} onChange={this.handleContentChange} />
                    </Segment>
                </ContentDiv>
                <div>
                    <Button onClick={this.onDemo} floated="right" icon labelPosition="left">
                        <Icon name="save" />
                        Save
                    </Button>

                    <Modal open={this.state.open} onClose={this.close}>
                        <Modal.Header>Reformat</Modal.Header>
                        <Modal.Content scrolling>
                            <MonacoEditor options={onlyShow} language={this.props.extention} width="100%" height="80%" theme="vs-light" max-width="100%"
                                value={this.props.demoText} />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color="green" disabled={!this.props.pass} floated="right" icon labelPosition="left" onClick={this.onSave}>
                                <Icon name="check" />
                                Confirm
                            </Button>
                            <Button color="red" icon labelPosition="left" onClick={this.close}>
                                <Icon name="cancel" />
                                Cancel
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        )
    }
}