<template>
        <v-locale-provider rtl>
            <v-container class="align-center" style="height:100vh !important;font-size:14px;">
                <v-row  class="justify-center align-center w-100 h-100">
                    <v-col cols="12" md="8" offset-md="2">
                        <v-card elevation="3" class="bg-white" rounded>
                            <div class="w-100 " style="height: 150px;">
                                <v-img class="w-100 h-100 align-center "
                                    gradient="to bottom,rgba(0,0,255,.5),rgba(0,0,0,.1)">
                                    <v-row justify="center">
                                        <v-icon color="white" class="d-inline-block mainloginicon">mdi-account-plus</v-icon>
                                    </v-row>
                                </v-img>
                            </div>
                            <v-card-subtitle>برای ورود به حساب کاربری، نام کاربری و پسوردتان را وارد
                                نمایید.</v-card-subtitle>
                            <v-form ref="loginform" class="myform" @update:modelValue="changeformvalidation"
                                @submit.prevent="submit">
                                <v-card-text>
                                    <v-text-field v-model="user" type="text" variant="outlined" label="نام کاربری"
                                        :rules="[rules.required]" hint="نام کاربری خود را وارد نمایید">
                                        <template v-slot:prepend-inner>
                                            <v-icon color="purple">mdi-account</v-icon>
                                        </template>
                                    </v-text-field>
                                </v-card-text>
                                <v-card-text>
                                    <v-text-field v-model="pass" type="password" :rules="[rules.required]"
                                        variant="outlined" label="رمز عبور" hint="رمز عبور خود را وارد نمایید">
                                        <template v-slot:prepend-inner>
                                            <v-icon color="purple">mdi-lock</v-icon>
                                        </template>
                                    </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class=" forgetpass text-blue-darken-3">آیا رمز عبور خود را فراموش نموده
                                    اید؟</v-card-subtitle>
                                <v-card-actions class="text-left">
                                    <v-spacer></v-spacer>
                                    <v-card-subtitle class="text-red-darken-4 text-center" v-if="showError">
                                        {{ errorText }}
                                    </v-card-subtitle>
                                    <v-btn :disabled="isLoginOkToSubmit" type="submit"
                                        class="bg-orange-lighten-3 text-black font-weight-bold" rounded>
                                        <span>ورود</span>
                                        <v-icon>mdi-login</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-locale-provider>
</template>
<script>
import { PostData_normal } from '@/services/remotedatamodify';
export default {
    data() {
        return {
            rules: {
                required: value => {
                    if (value && value.trim().length > 0) {
                        return true;

                    }
                    else {
                        return "حتما باید پر شد";
                    }
                }
            },
            isLoginOkToSubmit: true,
            btnloading: false,
            errorText: "",
            showError: false,
            user: "",
            pass: "",
        }
    },
    beforeUnmount(){
        this.$store.state.showlogin=false;
    },
    created(){
        this.$store.state.isMainPage=false
    },
    methods: {
        changeformvalidation() {
            this.isLoginOkToSubmit = !this.$refs.loginform.isValid;
        },
        submit() {
            PostData_normal("admincheckvalidity",
                { user: this.user, pass: this.pass },null, (err, res) => {
                    console.log(res)
                    if (err) {
                       this.$router.push("/admin",)
                    }
                    else {
                        if(res.data.result=="R0"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="خوش آمدید"
                            this.$store.state.snbg="green";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                                this.$router.replace("/admin/adminUsers")
                            }, 2000);
                        }
                        else if(res.data.result=="R3"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="اطلاعات وارد شده صحیح نمی باشند"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                        }
                        else if(res.data.result=="R4"){
                            this.$store.state.snd=true;
                            this.$store.state.snt="اطلاعات وارد شده صحیح نمی باشند"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                        }
                        else{
                            this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=true;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                        }
                    }
                });
        }
    }
}
</script>
<style scoped>
.forgetpass:hover {
    cursor: pointer;
}

.mainloginicon {
    box-shadow: 3px 3px 5px 8px rgba(0, 0, 0, .5);
    font-size: 60px;
    height: 73px;
    width: 77px;
    padding: 3px;
    border-radius: 50%;
}
</style>