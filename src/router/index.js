import { createRouter, createWebHistory } from 'vue-router'
//import MainPage from "../components/MainPage.vue"
import UserPersonal from "@/components/UserPersonal.vue"
import LoginPAge from "@/components/LoginPage.vue"
import AdminUsers from "@/components/adminUsers.vue"
import AdminJobs from "@/components/adminJobs.vue"
import JobDetail from "@/components/JobRegister.vue"
import RegisterEmployeePage from "@/components/RegisterEmployeePage.vue"
import UserUniCert from "@/components/UserUniCert.vue"
import UserSkills from "@/components/UserSkills.vue"
import UserJobResume from "@/components/userJobResume.vue"
import UserInterests from "@/components/UserInterests.vue"
import UserForeignLanguage from "@/components/UserForeignLanguage.vue"
import AdminRequests from "@/components/adminRequests.vue"
import SendMessageToEmployeeAndEmployer from "@/components/sendMessageToEmployeeandEmployer.vue"
import adminMessages from "@/components/adminMessages.vue"
import answerUserMessages from "@/components/answerUserMessages.vue"
import ShowRequest from "@/components/UserSentRequestStatus.vue"


const appRoutes = [
    {
        path: "/admin/adminlogin",
        name: "Login",
        component: LoginPAge
    },
    {
        path: "/admin/adminUsers",
        component: AdminUsers
    },
    {
        path: "/admin/adminJobs",
        component: AdminJobs
    },
    {
        path: "/admin/jobdetail/:id",
        component: JobDetail
    },
    {
        path: "/admin/adminRequests",
        component: AdminRequests
    },
    {
        path: "/admin/answerUserMessages/:userId/:messageId",
        component: answerUserMessages
    },
    {
        path: "/admin/adminMessages",
        component: adminMessages
    },
    {
        path: "/admin/sendMessageToEmployeeandEmployer/:employeeId/:employerId",
        component: SendMessageToEmployeeAndEmployer
    },
    {
        path: "/admin/showRequest/:requestId",
        component: ShowRequest
    },
    {
        path: "/admin/userinfo/:id",
        component: RegisterEmployeePage,
        children: [
            {
                path: "",
                component: UserPersonal
            },
            {
                path: "personal",
                component: UserPersonal
            },
            {
                path: "unicert",
                component: UserUniCert
            },
            {
                path: "skills",
                component: UserSkills
            },
            {
                path: "jobresume",
                component: UserJobResume
            },
            {
                path: "interests",
                component: UserInterests
            },
            {
                path: "foreignlanguage",
                component: UserForeignLanguage
            },
        ]

    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes
})
export default router;