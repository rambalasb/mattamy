import { useState } from 'react'

import Modal from '.'
import TextBox from 'components/TextBoxes/TextBox'
import Button from 'components/Buttons/Button'

export default {
	title: 'Modal',
	component: Modal,
	args: {
		modalHeader: 'Basic Modal',
		modalId: 'basicModal',
		childern: (
			<p>
				Remember, remember! The fifth of November, The Gunpowder treason and
				plot; I know of no reason Why the Gunpowder treason Should ever be
				forgot! Guy Fawkes and his companions Did the scheme contrive, To blow
				the King and Parliament All up alive. Threescore barrels, laid below, To
				prove old England's overthrow. But, by God's providence, him they catch,
				With a dark lantern, lighting a match! A stick and a stake For King
				James's sake! Ifyou won't give me one, I'll take two, The better for me,
				And the worse for you. A rope, a rope, to hang the Pope, A penn'orth of
				cheese to choke him, A pint of beer to wash it down, And a jolly good
				fire to burn him. Holloa, boys! holloa, boys! make the bells ring!
				Holloa, boys! holloa boys! God save the King! Hip, hip, hooor-r-r-ray!
			</p>
		),
	},
}

const Template = (args) => {
	const [mockIsOpen, setMockIsOpen] = useState(false)

	return (
		<>
			<Button
				buttonId="btnOpenModal"
				onClickHandler={() => setMockIsOpen(true)}
				variant="primary"
			>
				Click Me
			</Button>

			<Modal
				{...args}
				isOpen={mockIsOpen}
				setIsOpen={setMockIsOpen}
				modalMainBtn={{
					id: 'btnCloseModal',
					text: 'Close',
					size: '',
					variant: 'primary',
					onClickHandler: () => setMockIsOpen(false),
				}}
			>
				Modal Template Text
			</Modal>
		</>
	)
}

export const BasicTemplate = Template.bind({})

export const TwoButtonTemplate = Template.bind({})
TwoButtonTemplate.args = {
	modalSecondaryBtn: {
		id: 'btnCancel',
		text: 'Cancel',
		size: 'small',
		variant: 'danger',
		onClickHandler: () => {},
	},
}

export const FormModalTemplate = Template.bind({})
FormModalTemplate.args = {
	modalHeader: 'Login Form',
	childern: (
		<div>
			<TextBox
				textBoxId="txtUsername"
				textBoxLabel="Username"
				textBoxFooter="Please Enter a username."
			></TextBox>

			<TextBox
				textBoxId="txtPassword"
				textBoxLabel="Password"
				textBoxFooter="Please enter a password."
			></TextBox>
		</div>
	),
}
