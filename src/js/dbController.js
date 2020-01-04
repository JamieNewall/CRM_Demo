const Sequelize = require('sequelize');
const excel = require('xlsx');



// const data = require('../../util/getExcel.js');
// console.log(data);

class dbController {
    constructor() {

    }

    static populateDB(data, opportunityDb) {


        data.forEach((opp, index) => {

            if (index >= 600 && index < 781) {

                opportunityDb.create({
                    one_OppName: opp.one_OppName,
                    one_PvLead: opp.one_PvLead,
                    opp_Status: opp.opp_Status,
                    opp_CurrentStage: opp.opp_CurrentStage,
                    one_IntroDate: opp.one_IntroDate,
                    one_Introducer: opp.one_Introducer,
                    one_Referrer: opp.one_Referrer,
                    one_InvestmentAmount: opp.one_InvestmentAmount,
                    one_PreMoney: opp.one_PreMoney,
                    one_TotalInvestment: opp.one_TotalInvestment,
                    one_EquityPercentage: opp.one_EquityPercentage,
                    one_Location: opp.one_Location,
                    one_Sector: opp.one_Sector,
                    one_InvestmentStage: opp.one_InvestmentStage,
                    one_InvestmentToDate: opp.one_InvestmentToDate,
                    one_Activity: opp.one_Activity,
                    one_TargetCustomers: opp.one_TargetCustomers,
                    two_NdaSigned: opp.two_NdaSigned,
                    two_TeamMembers: opp.two_TeamMembers,
                    three_CompanyDescription: opp.three_CompanyDescription,
                    three_PvSplit: opp.three_PvSplit,
                    three_VpSplit: opp.three_VpSplit,
                    three_FundAllocation: opp.three_FundAllocation,
                    three_proposalSentDateTeam: opp.three_proposalSentDateTeam,
                    three_ProposalSentDateIc: opp.three_ProposalSentDateIc,
                    three_IcMeetingDate: opp.three_IcMeetingDate,
                    three_IcApproved: opp.three_IcApproved,
                    four_PvInvestmentAmount: opp.four_PvInvestmentAmount,
                    four_PremoneyValuation: opp.four_PremoneyValuation,
                    four_TotalRoundAmount: opp.four_TotalRoundAmount,
                    four_NonDilutedEquity: opp.four_NonDilutedEquity,
                    four_FullyDilutedEquity: opp.four_FullyDilutedEquity,
                    four_PriorReturn: opp.four_PriorReturn,
                    four_expectedCompletionDate: opp.four_expectedCompletionDate,
                    four_OfferTeamReviewer: opp.four_OfferTeamReviewer,
                    four_OfferReviewedDate: opp.four_OfferReviewedDate,
                    four_OfferIcReviewer: opp.four_OfferIcReviewer,
                    four_OfferIcApprovedDate: opp.four_OfferIcApprovedDate,
                    four_OfferSentDate: opp.four_OfferSentDate,
                    five_financialExternalProviderEngaged: opp.five_financialExternalProviderEngaged,
                    five_lawyersUsed: opp.five_lawyersUsed,
                    five_CompanyLawyer: opp.five_CompanyLawyer,
                    five_ArticlesSummary: opp.five_ArticlesSummary,
                    five_CovenantSummary: opp.five_CovenantSummary,
                    five_CddFee: opp.five_CddFee,
                    five_MddExternalProviderEngaged: opp.five_MddExternalProviderEngaged,
                    five_MddFee: opp.five_MddFee,
                    five_MddSummary: opp.five_MddSummary,
                    five_KycDateCompleted: opp.five_KycDateCompleted,
                    five_EisAdvisor: opp.five_EisAdvisor,
                    five_DealSummaryDone: opp.five_DealSummaryDone,
                    five_DdReviewer: opp.five_DdReviewer,
                    six_DateFinalIc: opp.six_DateFinalIc,
                    six_Premoney: opp.six_Premoney,
                    six_EquityFinal: opp.six_EquityFinal,
                    six_CommitteeDecision: opp.six_CommitteeDecision,
                    seven_EisAssuranceReceived: opp.seven_EisAssuranceReceived,
                    seven_PortfolioIntroduced: opp.seven_PortfolioIntroduced,
                    seven_ReviewedManagementAccs: opp.seven_ReviewedManagementAccs,
                    seven_AgreedBoard: opp.seven_AgreedBoard,
                    eight_CompletionDate: opp.eight_CompletionDate,
                    eight_EisOneSentDate: opp.eight_EisOneSentDate,
                    eight_EisThreeReceivedDate: opp.eight_EisThreeReceivedDate,
                    eight_EisFiveSentDate: opp.eight_EisFiveSentDate,
                    eight_EisFiveReceivedDate: opp.eight_EisFiveReceivedDate,
                    eight_UploadedEisToPortal: opp.eight_UploadedEisToPortal,
                    eight_SidecarInvestorOne: opp.eight_SidecarInvestorOne,
                    eight_SidecarInvestorOneAmount: opp.eight_SidecarInvestorOneAmount,
                    eight_SidecarInvestorOneTransactionDate: opp.eight_SidecarInvestorOneTransactionDate,
                    eight_SidecarInvestorOneCompletionDate: opp.eight_SidecarInvestorOneCompletionDate,
                    eight_SidecarInvestorOneEquity: opp.eight_SidecarInvestorOneEquity,
                    eight_SidecarInvestorOneShares: opp.eight_SidecarInvestorOneShares,
                    eight_SidecarInvestorTwo: opp.eight_SidecarInvestorTwo,
                    eight_SidecarInvestorTwoAmount: opp.eight_SidecarInvestorTwoAmount,
                    eight_SidecarInvestorTwoTransactionDate: opp.eight_SidecarInvestorTwoTransactionDate,
                    eight_SidecarInvestorTwoCompletionDate: opp.eight_SidecarInvestorTwoCompletionDate,
                    eight_SidecarInvestorTwoEquity: opp.eight_SidecarInvestorTwoEquity,
                    eight_SidecarInvestorTwoShares: opp.eight_SidecarInvestorTwoShares,
                    eight_VpInvestorOne: opp.eight_VpInvestorOne,
                    eight_VpInvestorOneAmount: opp.eight_VpInvestorOneAmount,
                    eight_VpInvestorOneTransactionDate: opp.eight_VpInvestorOneTransactionDate,
                    eight_VpInvestorOneCompletionDate: opp.eight_VpInvestorOneCompletionDate,
                    eight_VpInvestorOneEquity: opp.eight_VpInvestorOneEquity,
                    eight_VpInvestorOneShares: opp.eight_VpInvestorOneShares,
                    eight_VpInvestorTwo: opp.eight_VpInvestorTwo,
                    eight_VpInvestorTwoAmount: opp.eight_VpInvestorTwoAmount,
                    eight_VpInvestorTwoTransactionDate: opp.eight_VpInvestorTwoTransactionDate,
                    eight_VpInvestorTwoCompletionDate: opp.eight_VpInvestorTwoCompletionDate,
                    eight_VpInvestorTwoEquity: opp.eight_VpInvestorTwoEquity,
                    eight_VpInvestorTwoShares: opp.eight_VpInvestorTwoShares,
                    eight_VpInvestorThree: opp.eight_VpInvestorThree,
                    eight_VpInvestorThreeAmount: opp.eight_VpInvestorThreeAmount,
                    eight_VpInvestorThreeTransactionDate: opp.eight_VpInvestorThreeTransactionDate,
                    eight_VpInvestorThreeCompletionDate: opp.eight_VpInvestorThreeCompletionDate,
                    eight_VpInvestorThreeEquity: opp.eight_VpInvestorThreeEquity,
                    eight_VpInvestorThreeShares: opp.eight_VpInvestorThreeShares,
                    eight_VpInvestorFour: opp.eight_VpInvestorFour,
                    eight_VpInvestorFourAmount: opp.eight_VpInvestorFourAmount,
                    eight_VpInvestorFourTransactionDate: opp.eight_VpInvestorFourTransactionDate,
                    eight_VpInvestorFourCompletionDate: opp.eight_VpInvestorFourCompletionDate,
                    eight_VpInvestorFourEquity: opp.eight_VpInvestorFourEquity,
                    eight_VpInvestorFourShares: opp.eight_VpInvestorFourShares,
                    eight_TrancheOneFund: opp.eight_TrancheOneFund,
                    eight_TrancheTwoFund: opp.eight_TrancheTwoFund,
                    eight_TrancheThreeFund: opp.eight_TrancheThreeFund,
                    eight_TrancheOneAmount: opp.eight_TrancheOneAmount,
                    eight_TrancheTwoAmount: opp.eight_TrancheTwoAmount,
                    eight_TrancheThreeAmount: opp.eight_TrancheThreeAmount,
                    eight_TrancheOneTransactionDate: opp.eight_TrancheOneTransactionDate,
                    eight_TrancheTwoTransactionDate: opp.eight_TrancheTwoTransactionDate,
                    eight_TrancheThreeTransactionDate: opp.eight_TrancheThreeTransactionDate,
                    eight_TrancheOneCompletionDate: opp.eight_TrancheOneCompletionDate,
                    eight_TrancheTwoCompletionDate: opp.eight_TrancheTwoCompletionDate,
                    eight_TrancheThreeCompletionDate: opp.eight_TrancheThreeCompletionDate,
                    eight_TrancheOneShares: opp.eight_TrancheOneShares,
                    eight_TrancheTwoShares: opp.eight_TrancheTwoShares,
                    eight_TrancheThreeShares: opp.eight_TrancheThreeShares,
                    eight_TrancheOneEquity: opp.eight_TrancheOneEquity,
                    eight_TrancheTwoEquity: opp.eight_TrancheTwoEquity,
                    eight_TrancheThreeEquity: opp.eight_TrancheThreeEquity,
                    decline_Dropdown: opp.decline_Dropdown,
                    decline_Rationale: opp.decline_Rationale,
                    decline_PersonCancelling: opp.decline_PersonCancelling,
                    decline_ToldFounders: opp.decline_ToldFounders,
                    monitor_Dropdown: opp.monitor_Dropdown,
                    monitor_Notes: opp.monitor_Notes,
                    monitor_FollowupDate: opp.monitor_FollowupDate,
                }).then().catch((err) => {
                    console.log(`${opp.one_OppName} is causing issues. ${err}`);
                })}

        })}
}



                    // six_DateFinalIc: opp.six_DateFinalIc,
                    // six_Premoney: opp.six_Premoney,
                    // six_EquityFinal: opp.six_EquityFinal,
                    // six_CommitteeDecision: opp.six_CommitteeDecision,
                    // seven_EisAssuranceReceived: opp.seven_EisAssuranceReceived,
                    // seven_PortfolioIntroduced: opp.seven_PortfolioIntroduced,
                    // seven_ReviewedManagementAccs: opp.seven_ReviewedManagementAccs,
                    // seven_AgreedBoard: opp.seven_AgreedBoard,
                    // eight_CompletionDate: opp.eight_CompletionDate,
                    // eight_EisOneSentDate: opp.eight_EisOneSentDate,
                    // eight_EisThreeReceivedDate: opp.eight_EisThreeReceivedDate,
                    // eight_EisFiveSentDate: opp.eight_EisFiveSentDate,
                    // eight_EisFiveReceivedDate: opp.eight_EisFiveReceivedDate,
                    // eight_UploadedEisToPortal: opp.eight_UploadedEisToPortal,
                    // eight_SidecarInvestorOne: opp.eight_SidecarInvestorOne,
                    // eight_SidecarInvestorOneAmount: opp.eight_SidecarInvestorOneAmount,
                    // eight_SidecarInvestorOneTransactionDate: opp.eight_SidecarInvestorOneTransactionDate,
                    // eight_SidecarInvestorOneCompletionDate: opp.eight_SidecarInvestorOneCompletionDate,
                    // eight_SidecarInvestorOneEquity: opp.eight_SidecarInvestorOneEquity,
                    // eight_SidecarInvestorOneShares: opp.eight_SidecarInvestorOneShares,
                    // eight_SidecarInvestorTwo: opp.eight_SidecarInvestorTwo,
                    // eight_SidecarInvestorTwoAmount: opp.eight_SidecarInvestorTwoAmount,
                    // eight_SidecarInvestorTwoTransactionDate: opp.eight_SidecarInvestorTwoTransactionDate,
                    // eight_SidecarInvestorTwoCompletionDate: opp.eight_SidecarInvestorTwoCompletionDate,
                    // eight_SidecarInvestorTwoEquity: opp.eight_SidecarInvestorTwoEquity,
                    // eight_SidecarInvestorTwoShares: opp.eight_SidecarInvestorTwoShares,
                    // eight_VpInvestorOne: opp.eight_VpInvestorOne,
                    // eight_VpInvestorOneAmount: opp.eight_VpInvestorOneAmount,
                    // eight_VpInvestorOneTransactionDate: opp.eight_VpInvestorOneTransactionDate,
                    // eight_VpInvestorOneCompletionDate: opp.eight_VpInvestorOneCompletionDate,
                    // eight_VpInvestorOneEquity: opp.eight_VpInvestorOneEquity,
                    // eight_VpInvestorOneShares: opp.eight_VpInvestorOneShares,
                    // eight_VpInvestorTwo: opp.eight_VpInvestorTwo,
                    // eight_VpInvestorTwoAmount: opp.eight_VpInvestorTwoAmount,
                    // eight_VpInvestorTwoTransactionDate: opp.eight_VpInvestorTwoTransactionDate,
                    // eight_VpInvestorTwoCompletionDate: opp.eight_VpInvestorTwoCompletionDate,
                    // eight_VpInvestorTwoEquity: opp.eight_VpInvestorTwoEquity,
                    // eight_VpInvestorTwoShares: opp.eight_VpInvestorTwoShares,
                    // eight_VpInvestorThree: opp.eight_VpInvestorThree,
                    // eight_VpInvestorThreeAmount: opp.eight_VpInvestorThreeAmount,
                    // eight_VpInvestorThreeTransactionDate: opp.eight_VpInvestorThreeTransactionDate,
                    // eight_VpInvestorThreeCompletionDate: opp.eight_VpInvestorThreeCompletionDate,
                    // eight_VpInvestorThreeEquity: opp.eight_VpInvestorThreeEquity,
                    // eight_VpInvestorThreeShares: opp.eight_VpInvestorThreeShares,
                    // eight_VpInvestorFour: opp.eight_VpInvestorFour,
                    // eight_VpInvestorFourAmount: opp.eight_VpInvestorFourAmount,
                    // eight_VpInvestorFourTransactionDate: opp.eight_VpInvestorFourTransactionDate,
                    // eight_VpInvestorFourCompletionDate: opp.eight_VpInvestorFourCompletionDate,
                    // eight_VpInvestorFourEquity: opp.eight_VpInvestorFourEquity,
                    // eight_VpInvestorFourShares: opp.eight_VpInvestorFourShares,
                    // eight_TrancheOneFund: opp.eight_TrancheOneFund,
                    // eight_TrancheTwoFund: opp.eight_TrancheTwoFund,
                    // eight_TrancheThreeFund: opp.eight_TrancheThreeFund,
                    // eight_TrancheOneAmount: opp.eight_TrancheOneAmount,
                    // eight_TrancheTwoAmount: opp.eight_TrancheTwoAmount,
                    // eight_TrancheThreeAmount: opp.eight_TrancheThreeAmount,
                    // eight_TrancheOneTransactionDate: opp.eight_TrancheOneTransactionDate,
                    // eight_TrancheTwoTransactionDate: opp.eight_TrancheTwoTransactionDate,
                    // eight_TrancheThreeTransactionDate: opp.eight_TrancheThreeTransactionDate,
                    // eight_TrancheOneCompletionDate: opp.eight_TrancheOneCompletionDate,
                    // eight_TrancheTwoCompletionDate: opp.eight_TrancheTwoCompletionDate,
                    // eight_TrancheThreeCompletionDate: opp.eight_TrancheThreeCompletionDate,
                    // eight_TrancheOneShares: opp.eight_TrancheOneShares,
                    // eight_TrancheTwoShares: opp.eight_TrancheTwoShares,
                    // eight_TrancheThreeShares: opp.eight_TrancheThreeShares,
                    // eight_TrancheOneEquity: opp.eight_TrancheOneEquity,
                    // eight_TrancheTwoEquity: opp.eight_TrancheTwoEquity,
                    // eight_TrancheThreeEquity: opp.eight_TrancheThreeEquity,
                    // decline_Dropdown: opp.decline_Dropdown,
                    // decline_Rationale: opp.decline_Rationale,
                    // decline_PersonCancelling: opp.decline_PersonCancelling,
                    // decline_ToldFounders: opp.decline_ToldFounders,
                    // monitor_Dropdown: opp.monitor_Dropdown,
                    // monitor_Notes: opp.monitor_Notes,
                    // monitor_FollowupDate: opp.monitor_FollowupDate,







        // if (entry === "one_OppName") {
        //     opportunityDb.create({
        //         [entry]: opp[entry]
        //     })
        // } else {
        //
        //
        //         opportunityDb.update(
        //
        //             {[entry]: opp[entry]},
        //             {where:{one_OppName: opp.one_OppName}}).then()
        //
        //
        //
        //     }


        // try {
        //     opportunityDb.create({
        //         one_OppName: opp.one_OppName,
        //         one_PvLead: opp.one_PvLead,
        //         status: '0',
        //         one_IntroDate: opp.one_IntroDate,
        //         one_Introducer: opp.one_Introducer,
        //         one_Referrer: opp.one_Referrer,
        //         one_InvestmentAmount: opp.one_InvestmentAmount,
        //         one_PreMoney: opp.one_PreMoney,
        //         one_TotalInvestment: opp.one_TotalInvestment,
        //         one_EquityPercentage: opp.one_EquityPercentage,
        //         one_Location: opp.one_Location,
        //         one_Sector: opp.one_Sector,
        //         one_InvestmentStage: opp.one_InvestmentStage,
        //         one_InvestmentToDate: opp.one_InvestmentToDate,
        //         one_Activity: opp.one_Activity,
        //         one_TargetCustomers: opp.one_TargetCustomers,
        //         two_NdaSigned: opp.two_NdaSigned,two_TeamMembers: opp.two_TeamMembers,three_CompanyDescription: opp.three_CompanyDescription,
        //         three_PvSplit: opp.three_PvSplit,three_VpSplit: opp.three_VpSplit,three_FundAllocation: opp.three_FundAllocation,
        //         three_proposalSentDateTeam: opp.three_proposalSentDateTeam,
        //         three_ProposalSentDateIc: opp.three_ProposalSentDateIc,
        //         three_IcMeetingDate: opp.three_IcMeetingDate,
        //         three_IcApproved: opp.three_IcApproved,four_PvInvestmentAmount: opp.four_PvInvestmentAmount,
        //         four_PremoneyValuation: opp.four_PremoneyValuation,four_TotalRoundAmount: opp.four_TotalRoundAmount,
        //         four_NonDilutedEquity: opp.four_NonDilutedEquity,four_FullyDilutedEquity: opp.four_FullyDilutedEquity,four_PriorReturn: opp.four_PriorReturn,
        //         four_expectedCompletionDate: opp.four_expectedCompletionDate,four_OfferTeamReviewer: opp.four_OfferTeamReviewer,
        //         four_OfferReviewedDate: opp.four_OfferReviewedDate,four_OfferIcReviewer: opp.four_OfferIcReviewer,
        //         four_OfferIcApprovedDate: opp.four_OfferIcApprovedDate,four_OfferSentDate: opp.four_OfferSentDate,
        //         five_financialExternalProviderEngaged: opp.five_financialExternalProviderEngaged,five_financialSummary: opp.five_financialSummary,
        //         five_lawyersUsed: opp.five_lawyersUsed,five_LegalFee: opp.five_LegalFee,five_CompanyLawyer: opp.five_CompanyLawyer,
        //         five_ArticlesSummary: opp.five_ArticlesSummary,five_IaSummary: opp.five_IaSummary,five_CovenantSummary: opp.five_CovenantSummary,
        //         five_CddUsed: opp.five_CddUsed,five_CddFee: opp.five_CddFee,five_CddSummary: opp.five_CddSummary,
        //         five_MddExternalProviderEngaged: opp.five_MddExternalProviderEngaged,five_MddProvider: opp.five_MddProvider,
        //         five_MddFee: opp.five_MddFee,five_MgtReferencesDone: opp.five_MgtReferencesDone,five_MddSummary: opp.five_MddSummary,
        //         five_KycConfirmedSignificantHolders: opp.five_KycConfirmedSignificantHolders,five_KycDateCompleted: opp.five_KycDateCompleted,
        //         five_EisReviewed: opp.five_EisReviewed,five_EisAdvisor: opp.five_EisAdvisor,five_EisSubmissionDate: opp.five_EisSubmissionDate,
        //         five_DealSummaryDone: opp.five_DealSummaryDone,five_DdReviewed: opp.five_DdReviewed,five_DdReviewer: opp.five_DdReviewer,
        //         five_DdReviewDate: opp.five_DdReviewDate })
        // } catch {
        //         console.log(opp.one_OppName);
        //     }


        // }





module.exports.dbController = dbController;
