import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../../components/MyLabel/MyLabel";

export default {
    title: 'Widgets/MyLabel',
    component: MyLabel
  } as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
}
