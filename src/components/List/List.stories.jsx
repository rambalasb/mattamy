import CheckBox from 'components/CheckBox'
import List from '.'
import ListItem from 'components/List/ListItem'

import { LinkListItems } from 'components/List/List.mock'

export default {
	title: 'List',
	component: List,
	args: {
		listId: 'defaultList',
	},
}

export const BasicTemplate = (args) => {
	return (
		<List {...args}>
			{LinkListItems.map((listItem) => (
				<ListItem key={listItem.id} listItemId={listItem.id}>
					<a style={{ paddingLeft: '10px' }} href={listItem.path}>
						{listItem.title}
					</a>
				</ListItem>
			))}
		</List>
	)
}

export const IconListTemplate = (args) => {
	return (
		<List {...args}>
			{LinkListItems.map((listItem) => (
				<ListItem key={listItem.id} listItemId={listItem.id}>
					{listItem.svg}
					<a style={{ paddingLeft: '10px' }} href={listItem.path}>
						{listItem.title}
					</a>
				</ListItem>
			))}
		</List>
	)
}

export const ComponentListTemplate = (args) => {
	return (
		<List {...args}>
			<ListItem key="1" listItemId="1">
				<CheckBox
					checkboxId="chkFotR"
					checkboxName="chkFotR"
					checkboxLabel="Fellowship of the rings"
					onChangeHandler={() => {}}
				/>
			</ListItem>

			<ListItem key="2" listItemId="2">
				<CheckBox
					checkboxId="chkTTT"
					checkboxName="chkTTT"
					checkboxLabel="The Two Towers"
					onChangeHandler={() => {}}
				/>
			</ListItem>

			<ListItem key="3" listItemId="3">
				<CheckBox
					checkboxId="chkTRotK"
					checkboxName="chkTRotK"
					checkboxLabel="The Return of the King"
					onChangeHandler={() => {}}
				/>
			</ListItem>
		</List>
	)
}
