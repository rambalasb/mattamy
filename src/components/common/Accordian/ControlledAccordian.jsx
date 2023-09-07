import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ReactComponent as AddIcon } from 'assets/svgs/common/add.svg'
import { ReactComponent as RemoveIcon } from 'assets/svgs/common/remove.svg'
import { useMediaQuery } from '@mui/material'

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	marginBottom: '32px',
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
	({ theme }) => ({
		padding: theme.spacing('40px'),
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.primary.lightBlue,
		'& .MuiAccordionSummary-content': {
			margin: theme.spacing(0),
		},
		'& .mattamy-icon rect': {
			fill: theme.palette.secondary.main,
		},
		'& .mattamy-icon': {
			width: '64px',
			height: '64px',
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing('24px'),
			'& .mattamy-icon': {
				width: '32px',
				height: '32px',
			},
		},
	})
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	backgroundColor: theme.palette.primary.lightBlue,
	padding: theme.spacing('0 40px 64px 40px'),
	color: theme.palette.primary.darkGrey,
	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing('0 24px 40px 24px'),
	},
}))

export const ControlledAccordion = ({ accordianData }) => {
	const [expanded, setExpanded] = React.useState(0)
	const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}

	return (
		<div>
			{accordianData.map((item, key) => {
				return (
					<Accordion
						key={key}
						expanded={expanded === key}
						onChange={handleChange(key)}
					>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header"
							expandIcon={
								expanded === key ? (
									<RemoveIcon className="mattamy-icon" />
								) : (
									<AddIcon className="mattamy-icon" />
								)
							}
						>
							<Typography
								variant={!isMobileScreen ? 'titleMedium' : 'titleSmall'}
							>
								{item.question}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="bodySmall">{item.answer}</Typography>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}
