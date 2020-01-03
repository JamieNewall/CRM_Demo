const Sequelize = require('sequelize');
const excel = require('xlsx');



// const data = require('../../util/getExcel.js');
// console.log(data);

class dbController {
    constructor() {

    }

    static populateDB(data, opportunityDb) {



        data.forEach((opp) => {
            for (const entry in opp) {
                if (entry === "one_OppName") {
                    opportunityDb.create({
                        [entry]: opp[entry]
                    })
                } else {
                    try{
                        if(opp.one_OppName === "North Coders") {
                            console.log(opp)
                        }
                        opportunityDb.update(

                            {[entry]: opp[entry]},
                            {where:{one_OppName: opp.one_OppName}}).then().catch()
                    } catch {
                        console.log(opp.one_OppName, opp.opp_Status)
                    }


                    }



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







    }})
}}


module.exports.dbController = dbController;
