import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CustomizedCheckbox from '../Checkbox/Checkbox'

const Card = styled(MuiCard)(({ theme }) => ({
	padding: theme.spacing('24px 24px 24px 0'),
	marginBottom: '20px',
	color: theme.palette.primary.main,
	'.completed-task': {
		backgroundColor: theme.palette.primary.lightBlue,
		boxShadow: 'none',
	},
}))

const CardContent = styled(MuiCardContent)(({ theme }) => ({
	padding: theme.spacing(0),
	'.checkbox-container': {
		textAlign: 'center',
	},
}))

export const ChecklistCard = ({ checklist }) => {
	return (
		<>
			{checklist.map((checklistItem, index) => {
				return (
					<Card key={index}>
						<CardContent style={{ padding: 0 }}>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									direction="row"
									justifyContent="center"
									alignItems="flex-start"
									columns={{ xs: 6, sm: 8, md: 12 }}
								>
									<Grid
										className="checkbox-container"
										item
										xs={1.5}
										sm={1.5}
										md={1.5}
									>
										<CustomizedCheckbox
											defaultValue={checklistItem.checked}
										></CustomizedCheckbox>
									</Grid>
									<Grid item xs={4.5} sm={6.5} md={10.5}>
										<Typography variant="titleSmall">
											{checklistItem.header}
										</Typography>
										<br />
										<Typography variant="bodySmall">
											{checklistItem.content}
										</Typography>
									</Grid>
								</Grid>
							</Box>
						</CardContent>
					</Card>
				)
			})}
		</>
	)
}
