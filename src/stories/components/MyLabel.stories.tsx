import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title:'UI/MyLabel',
    component:MyLabel,
    argTypes:{
        size:{control:'select'},
        color:{control:'select'},
        fontColor:{control:'color'}
    }
} as ComponentMeta<typeof MyLabel>


const Template:ComponentStory<typeof MyLabel> =(args)=> <MyLabel{...args}/>

export const Basic = Template.bind({})
Basic.args={
    label:'No label',
    size: 'normal',
}
export const AllCaps = Template.bind({})
AllCaps.args={
    allCaps:true,
    size: 'normal',
}

export const Secondary = Template.bind({})
Secondary.args={
    allCaps:false,
    size: 'normal',
    color: 'secondary',
}
export const Tertiary = Template.bind({})
Tertiary.args={
    allCaps:false,
    size: 'normal',
    color: 'tertiary',
}

export const FontColor = Template.bind({})
FontColor.args={
    size: 'h1',
    fontColor:'#fafa'
}