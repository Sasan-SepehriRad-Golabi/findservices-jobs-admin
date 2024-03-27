<template>
    <v-dialog v-model="imageLargeScale" class="d-flex justify-center align-center">
         <v-row>
          <v-col cols="10" offset="1" md="4" offset-md="4" style="height:400px;">
            <v-card class="w-100 h-100">
            <v-row class="h-75">
              <img  :src="imageLargeScaleSrc" style="width:100%;height:100%;" />
            </v-row>
            <v-row style="height:10%;">
            </v-row>
           <v-row>
            <v-col cols="12">
              <v-card-actions>
              <v-btn variant="outlined" block class="bg-red text-white" @click="imageLargeScale=!imageLargeScale" >بستن</v-btn>
            </v-card-actions>
            </v-col>
           </v-row>
          </v-card>
          </v-col>
         </v-row>
        </v-dialog>

<v-locale-provider rtl>
    <v-card class="w-100 h-100">
    <v-card-subtitle>
          -حداکثر دو زبان-اطلاعات مربوط به مدارک زبان خارجی
    </v-card-subtitle>
<v-card-text>
    <v-row class="d-flex justify-center">
        <v-col cols="12" md="6" lg="4">
            <v-btn block variant="outlined" @click="userEdit=!userEdit" class="d-flex bg-red text-white">
             <v-icon>{{!userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{!userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-start mt-5">
        <v-col cols="12" md="4">
         <v-text-field label="نام زبان خارجی" variant="outlined" hint="مثلا انگلیسی،" :disabled="!userEdit" persistent-hint v-model="zabanName1">
         </v-text-field>
        </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="readingLevel1" :disabled="!userEdit" label="سطح زبان در مهارت خواندن" hint="سطح زبان در توانایی خواندن" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="writingLevel1" :disabled="!userEdit" label="سطح زبان در مهارت نوشتن" hint="سطح زبان در توانایی نوشتن" persistent-hint></v-select>
       </v-col>
    </v-row>
    <v-row class="d-flex justify-start">
        <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="dialogLevel1" :disabled="!userEdit" label="سطح زبان در مهارت مکالمه" hint="سطح زبان در توانایی مکالمه" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="listenLevel1" :disabled="!userEdit" label="سطح زبان در مهارت شنیدن" hint="سطح زبان در توانایی شنیدن" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-col cols="12"  class="d-flex align-center justify-center">
            <v-file-input variant="outlined" prepend-inner-icon="mdi-camera" prepend-icon="" chips show-size v-model="zabanCert1" :disabled="!userEdit" label="عکس مدرک در زبان مورد نظر" hint="در صورت داشتن مدرک زبان آن را وارد نمایید" persistent-hint>
        </v-file-input>
                </v-col>
                <v-col cols="12" md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(zabanCert1prev)" :src="zabanCert1prev?zabanCert1prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
        
       </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row class="d-flex justify-start mt-5">
        <v-col  cols="12" md="4">
         <v-text-field variant="outlined" label="نام زبان خارجی" :disabled="!userEdit" hint="مثلا عربی" persistent-hint v-model="zabanName2">
         </v-text-field>
        </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="readingLevel2" :disabled="!userEdit" label="سطح زبان در مهارت خواندن" hint="سطح زبان در توانایی خواندن" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="writingLevel2" :disabled="!userEdit" label="سطح زبان در مهارت نوشتن" hint="سطح زبان در توانایی نوشتن" persistent-hint></v-select>
       </v-col>
    </v-row>
    <v-row class="d-flex justify-start">
        <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="dialogLevel2" :disabled="!userEdit" label="سطح زبان در مهارت مکالمه" hint="سطح زبان در توانایی مکالمه" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-select variant="outlined" :items=levels v-model="listenLevel2" :disabled="!userEdit" label="سطح زبان در مهارت شنیدن" hint="سطح زبان در توانایی شنیدن" persistent-hint></v-select>
       </v-col>
       <v-col cols="12" md="4">
        <v-col cols="12"  class="d-flex align-center justify-center">
            <v-file-input variant="outlined" prepend-inner-icon="mdi-camera" prepend-icon="" chips show-size v-model="zabanCert2" :disabled="!userEdit" label="عکس مدرک در زبان مورد نظر" hint="در صورت داشتن مدرک زبان آن را وارد نمایید" persistent-hint>
        </v-file-input>
                </v-col>
                <v-col cols="12" md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(zabanCert2prev)" :src="zabanCert2prev?zabanCert2prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
        
       </v-col>
    </v-row>
    <v-divider></v-divider>
</v-card-text>
<v-card-actions class="d-flex justify-start align-center">
        <v-col>
          <v-row>
            <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updateZabanFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن مدارک زبان خارجی</span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updateZabanFromAdmin" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن مدارک زبان خارجی</span>
          </v-btn>
          </v-row>
          <v-row>
            <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="verifyUpdateZaban" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات</span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="verifyUpdateZaban" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>تایید اطلاعات</span>
          </v-btn>
          </v-row>
        </v-col>
        </v-card-actions>
</v-card>
</v-locale-provider>
</template>
    <script>
    import {PostData_formData,PostData_normal} from "@/services/remotedatamodify"
    export default{
        data(){
            return{
              userIdParam:"",
                btnLoading:false,
    imageLargeScale:false,
    imageLargeScaleSrc:"",  
                    userEdit:false,
                    levels:["عالی","خوب","متوسط","ضعیف","خیلی ضعیف"],
                    zabanName1:"",
                    zabanName2:"",
                    readingLevel1:"",
                    readingLevel2:"",
                    writingLevel1:"",
                    writingLevel2:"",
                    dialogLevel1:"",
                    dialogLevel2:"",
                    listenLevel1:"",
                    listenLevel2:"",
                    zabanCert1:"",
                    zabanCert2:"",
                    zabanCert1prev:"",
                    zabanCert2prev:""

            }
        },
        created(){
          this.$store.state.isMainPage=false
          this.userIdParam=this.$route.params.id;
            PostData_normal("getzabanFromAdmin",{userId:this.userIdParam},null,(err,res)=>{
          if(err){
            this.$store.state.snd=true;
            this.$store.state.snt="مشکل در ارتباط با سرور. پس از چند لحظه دوباره تلاش کنید"
            setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
          }
          else{
              if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R8"){
                this.$store.state.snd=true;
                  this.$store.state.snt="کاربر مورد نظر در رسیستم شناسایی نشد"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else{
                if(res.data){
                    let zab=res.data;
                this.zabanName1=zab.unzn1;
                    this.zabanName2=zab.unzn2;
                    this.readingLevel1=zab.unrl1;
                    this.readingLevel2=zab.unrl2;
                    this.writingLevel1=zab.unwr1;
                    this.writingLevel2=zab.unwr2;
                    this.dialogLevel1=zab.undi1;
                    this.dialogLevel2=zab.undi2;
                    this.listenLevel1=zab.unli1;
                    this.listenLevel2=zab.unli2;
                    this.zabanCert1prev=zab.uncer1&&zab.uncer1!=undefined?"data:image/jpeg;base64,"+zab.uncer1:"";
                    this.zabanCert2prev=zab.uncer2&&zab.uncer2!=undefined?"data:image/jpeg;base64,"+zab.uncer2:"";
              }
              }
            }
        })
        },
        methods:{
          verifyUpdateZaban(){
            if(this.userIdParam==-1){
          this.$store.state.snd=true;
                  this.$store.state.snt="برای آپدیت اطلاعات دوباره وارد صفحه کاربرها شوید و کاربر ساخته شده را از آنجا انتخاب نمایید."
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 4000);
        }
        else{
          this.btnLoading=true;
          PostData_normal("verifyUpdateZaban",{userId:this.userIdParam},null,(err,res)=>{
            if(err){
              this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
            }
            else{
              if(res.data && res.data.result){
                if(res.data.result=="R0"){
                  this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="green"
                  this.$store.state.snt="اطلاعات با  موفقیت تایید شد و 50 امتیاز به کاربر اضافه شد"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                }
                else{
                  this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در آپدیت اطلاعات خطا رخ داد. شما به درستی در سیستم شناسایی نشده اید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
                }
              }
              else{
                this.btnLoading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
              }

            }
          })
        }
        },
            showImageLarge(imageSrcValue){
          this.imageLargeScale=true;
          this.imageLargeScaleSrc=imageSrcValue;
        },
            updateZabanFromAdmin(){
              if(this.userIdParam==-1){
          this.$store.state.snd=true;
                  this.$store.state.snt="برای آپدیت اطلاعات دوباره وارد صفحه کاربرها شوید و کاربر ساخته شده را از آنجا انتخاب نمایید."
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 4000);
        }
        else{
          this.btnLoading=true;
                var fmData=new FormData();
                fmData.append("userId",this.userIdParam)
                fmData.append("zabanName1",this.zabanName1)
                fmData.append("zabanName2",this.zabanName2)
                fmData.append("readingLevel1",this.readingLevel1)
                fmData.append("readingLevel2",this.readingLevel2)
                fmData.append("writingLevel1",this.writingLevel1)
                fmData.append("writingLevel2",this.writingLevel2)
                fmData.append("dialogLevel1",this.dialogLevel1)
                fmData.append("dialogLevel2",this.dialogLevel2)
                fmData.append("listenLevel1",this.listenLevel1)
                fmData.append("listenLevel2",this.listenLevel2)
                if(this.zabanCert1&& this.zabanCert1.length>0){
                    for(let i=0;i<this.zabanCert1.length;i++){
                        fmData.append("zabanCert1",this.zabanCert1[i],`zabanCert1.${this.zabanCert1[i]&&this.zabanCert1[i].name?this.zabanCert1[i].name.split(".").pop():""}`)     
                    }
                }
                if(this.zabanCert2&& this.zabanCert2.length>0){
                    for(let i=0;i<this.zabanCert2.length;i++){
                        fmData.append("zabanCert2",this.zabanCert2[i],`zabanCert2.${this.zabanCert2[i]&&this.zabanCert2[i].name?this.zabanCert2[i].name.split(".").pop():""}`)     
                    }
                }
                PostData_formData("updateZabanFromAdmin",fmData,{
            onUploadProgress: (progressEvent) =>{
              console.log(progressEvent)
              this.$store.state.pgv = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
          },(err,res)=>{
            if(err){
              console.log(err)
              this.btnLoading=false;
              this.$store.state.snd=true;
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
            }
            else{
              this.btnLoading=false;
              if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/admin/adminlogin");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R8"){
                this.$store.state.snd=true;
                  this.$store.state.snt="کاربر مورد نظر در رسیستم شناسایی نشد"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else{
                if(res.data){
                  this.$store.state.snd=true;
                  this.$store.state.snt="اطلاعات با موفقیت آپدیت شد"
                  this.$store.state.snbg="green"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                let zab=res.data;
                this.zabanName1=zab.unzn1;
                    this.zabanName2=zab.unzn2;
                    this.readingLevel1=zab.unrl1;
                    this.readingLevel2=zab.unrl2;
                    this.writingLevel1=zab.unwr1;
                    this.writingLevel2=zab.unwr2;
                    this.dialogLevel1=zab.undi1;
                    this.dialogLevel2=zab.undi2;
                    this.listenLevel1=zab.unli1;
                    this.listenLevel2=zab.unli2;
                    this.zabanCert1prev=zab.uncer1&&zab.uncer1!=undefined?"data:image/jpeg;base64,"+zab.uncer1:"";
                    this.zabanCert2prev=zab.uncer2&&zab.uncer2!=undefined?"data:image/jpeg;base64,"+zab.uncer2:"";
              }
              }
            }
          })
        }
            }
        }
    }
    </script>