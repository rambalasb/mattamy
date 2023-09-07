import SearchIcon from 'assets/svgs/SearchIcon'

export default {
	title: 'SearchIcon',
	component: SearchIcon,
}

export const Template = (args) => {
	return <SearchIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
