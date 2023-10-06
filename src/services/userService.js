// import { postRequest } from '../utils/axiosClient'

// TODO: Remove this when integrating with backend
const dummyResponse = {
	uniqueUserId: '123',
	accountStatus: 'ACTIVE',
	firstName: 'John',
	lastName: 'Doe',
	email: 'johndoe@email.com',
	estateResponse: {
		divisions: [
			{
				divisionMpcCd: 'ALB',
				divisionName: 'Alberta',
				divisionCd: 'AB',
				communities: [
					{
						communityMpcCd: 'YRK',
						communityName: "Mattamy (Yorkville) 21' ViLlage",
						lots: [
							{
								jobLotId: '123',
								purchasedStatus: 'SAL/CAN/CLS/PND',
								whitelistedDate: '2023-02-02',
								unitType: 'Detached',
								suiteType: '3 Bed',
								fullBathType: '2 Bath',
								halfBathType: '1 Bath',
								garageType: '2',
								size: '2845 SQ FT',
								model: '50 UD',
								elevation: 'TN',
								stories: '2',
								streetAddress: '3267 Millicent Avenue',
								cityAddress: 'Oakville',
								provinceAddress: 'ON',
								countryAddress: 'CA',
								postalCode: 'L6H 0V1',
							},
						],
					},
				],
			},
		],
	},
}

const userLookup = async () => {
	// const response = await postRequest('api/lookup', {})
	// console.log(response)

	return dummyResponse
}

export default { userLookup }
