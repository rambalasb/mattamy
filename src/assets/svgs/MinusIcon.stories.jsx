import MinusIcon from 'assets/svgs/MinusIcon'

export default {
	title: 'MinusIcon',
	component: MinusIcon,
}

export const Template = (args) => {
	return <MinusIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
