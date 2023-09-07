import Card from './Card'
import ButtonLink from 'components/Buttons/ButtonLink'

export default {
	title: 'Card',
	component: Card,
	args: {
		cardId: 'cardDefault',
		cardHeader: 'I am a header',
		children: 'May the forth be with you',
	},
}

const Template = (args) => <Card {...args} />

export const DefaultTemplate = Template.bind({})

export const MutipleCardsTemplate = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
			}}
		>
			<Card
				cardId="1"
				cardHeader="Word of the Day"
				style={{ width: '50%', margin: '0px 25px' }}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h3>Benevloent</h3>
					be•nev•o•lent <sup>adjective</sup>
				</div>
				<div style={{ paddingTop: 10 }}>
					well meaning and kindly. "a benevolent smile"
				</div>
			</Card>
			<Card
				cardId="2"
				cardHeader="Color of 2023"
				style={{ width: '50%', margin: '0px 25px' }}
			>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<img
						alt="Paint chip of viva magenta"
						style={{ width: 100, height: 'auto' }}
						src="https://media.architecturaldigest.com/photos/63879fda479f451467fb572e/master/w_1600,c_limit/18-1750%20Viva%20Magenta.jpg"
					/>
					<div
						style={{
							paddingLeft: 10,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						Viva Magenta <p>Pantone 18-1750</p>
					</div>
				</div>
			</Card>
			<Card
				cardId="3"
				cardHeader="Word of 2023"
				style={{ width: '50%', margin: '0px 25px' }}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h3>Gaslighting</h3>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						gas•light•ing
						<sup>noun</sup>
					</div>
					<p>
						psychological manipulation of a person usually over an extended
						period of time that causes the victim to question the validity of
						their own thoughts, perception of reality, or memories and typically
						leads to confusion, loss of confidence and self-esteem, uncertainty
						of one's emotional or mental stability, and a dependency on the
						perpetrator
					</p>

					<ButtonLink href="https://www.merriam-webster.com/words-at-play/word-of-the-year">
						More Info...
					</ButtonLink>
				</div>
			</Card>
		</div>
	)
}
