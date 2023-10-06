import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import ChecklistImage from 'assets/images/Checklist.png'
import Box from '@mui/material/Box'
import Button from 'components/common/Buttons/Button'
import { ReactComponent as CompletedIcon } from 'assets/svgs/actions/completed.svg'

const Card = styled(MuiCard)(({ theme }) => ({
	padding: theme.spacing('24px'),
	marginBottom: '20px',
	color: theme.palette.primary.main,
	'.completed-task': {
		backgroundColor: theme.palette.primary.lightBlue,
		boxShadow: 'none',
	},
}))

const CardContent = styled(MuiCardContent)(({ theme }) => ({
	padding: theme.spacing(0),
	[theme.breakpoints.down('md')]: {
		textAlign: 'center',
	},
}))

const CompletionCard = ({ tasks }) => {
	return (
		<>
			{tasks.map((task, index) => {
				return (
					<Card
						key={index}
						className={task.isCompleted ? 'completed-task' : ''}
					>
						<CardContent style={{ padding: 0 }}>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									alignItems="center"
									spacing={{ xs: 2, md: 3 }}
									columns={12}
								>
									<Grid item xs={12} sm={12} md={2.5} lg={2}>
										<img
											width={'174px'}
											height={'100px'}
											src={ChecklistImage}
											alt="Check List"
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={6.5} lg={7}>
										<Typography variant="titleSmall">{task.header}</Typography>
										<br />
										<Typography variant="bodySmall">{task.content}</Typography>
									</Grid>
									<Grid item xs={12} sm={12} md={3} lg={3}>
										<Button
											variant={task.isCompleted ? 'primary-dark' : 'secondary'}
										>
											{task.isCompleted ? 'COMPLETED' : 'MARK AS COMPLETED'}
											{task.isCompleted ? <CompletedIcon /> : ''}
										</Button>
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

export default CompletionCard
