import MailboxIcon from 'assets/svgs/MailboxIcon'

export default {
	title: 'MailboxIcon',
	component: MailboxIcon,
}

export const Template = (args) => {
	return <MailboxIcon {...args} />
}

Template.args = {
	fillColor: '#000',
}
