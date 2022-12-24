<template>
    <!-- Main header -->
    <div class="main-header">
        <div class="main-header-left">
            <div class="main-header-input">
                <div class="input-box">
                    <input type="text" class="input-employee">
                </div>
                <div class="input-icon-box">
                    <div class="input-icon"></div>
                </div>
            </div>
        </div>
        <div class="main-header-right">
            <button class="btn-add" @click="openDialogInsert">Thêm</button>
            <button class="btn-export">Xuất khẩu</button>
            <button class="btn-more">
                <div class="icon-more"></div>
            </button>
        </div>
    </div>

    <!-- DỮ LIỆU HIỂN THỊ CỦA TRANG -->
    <div class="main-page">
        <table class="main-table">
            <tr class="heading">
                <td class="check">
                    <div class="check-box"></div>
                </td>
                <td class="employee-code">{{headingData.EmployeeCode }}</td>
                <td class="employee-name">{{ headingData.EmployeeName }}</td>
                <td class="phone-number">{{headingData.PhoneNumber}}</td>
                <td class="specialize">{{headingData.Group}}</td>
                <td class="subject">{{ headingData.ManageBySubject }}</td>
                <td class="room">{{headingData.ManageByDepartment}}</td>
                <td class="training">{{headingData.Major}}</td>
                <td class="working">{{headingData.Working}}</td>
                <td class="manager"></td>
            </tr>
            <tr class="data" v-for="(item, index) in employees" :key="index">
                <td class="check">
                    <div class="check-box"></div>
                </td>
                <td class="employee-code">{{ item.EmployeeCode }}</td>
                <td class="employee-name">{{ item.EmployeeName }}</td>
                <td class="phone-number">{{ item.PhoneNumber }}</td>
                <td class="specialize"></td>
                <td class="subject"></td>
                <td class="room"></td>
                <td class="training">
                    <div class="ticked"></div>
                </td>
                <td class="working"></td>
                <td class="manager">
                    <div class="manager-box">
                        <div class="edit" @click="btnEditOnClick(item)"></div>
                        <div class="delete" @click="btnDeleteOnclick(item)"></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <!-- Chân trang -->
    <div class="main-paging">
        <div class="btn-box">
            <div class="btn move-to-first"></div>
        </div>
        <div class="btn-box">
            <div class="btn previous"></div>
        </div>
        <div class="current-page">1</div>
        <div class="btn-box">
            <div class="btn next"></div>
        </div>
        <div class="btn-box">
            <div class="btn move-to-last"></div>
        </div>
        <div class="paging-text-1">1/2 trang</div>
        <div class="paging-text-2">(56 giáo viên)</div>
    </div>
    <TheEmployeeDetail v-if="displayDialogUpdate" :employeeId="employeeIdSelected" @loadData="loadData"
        @onClose="closeDialogUpdate"></TheEmployeeDetail>
    <TheEmployeeDelete v-if="displayDialogDelete" :employeeId="employeeIdDelete" @loadData="loadData" @onClose="closeDialogDelete"></TheEmployeeDelete>
    <TheEmployeeInsert v-if="displayDialogInsert"  @loadData="loadData" @onClose="closeDialogInsert"></TheEmployeeInsert>
    <TheLoading v-if="displayLoading"></TheLoading>
</template>
  
<script>
import axios from 'axios'
import TheEmployeeInsert from './TheEmployeeInsert.vue';
import TheEmployeeDetail from './TheEmployeeDetail.vue';
import TheEmployeeDelete from './TheEmployeeDelete.vue';
import TheLoading from './TheLoading.vue';
import TheResource from '../../js/TheResource.js';
import TheEnum from '../../js/TheEnum.js';


export default {
    name: "TheEmployeeList",
    created() {
        //Thực hiện load dữ liệu   
        this.loadData();
    },

    components: {
        TheEmployeeInsert,
        TheEmployeeDetail,
        TheEmployeeDelete,
        TheLoading
    },

    methods: {
        /**
         * Hàm load dữ liệu
         */
        loadData() {
            this.displayLoading = true;
            //Gọi api:
            axios.get("https://amis.manhnv.net/api/v1/Employees")
                .then(res => {
                    this.employees = res.data;
                    this.displayLoading = false;
                })
                .catch(error => {
                    console.log(error);
                })
            //Gán dữ liệu:

            //Hiển thị lỗi nếu có:
        },

        /**
         * Hàm mở dialog thêm khi click vào nút Thêm
         * Author: LTVu (24/12/2022)
         */
         openDialogInsert() {
            //chuyển display thành true để hiện trong v-if
            try {
                this.displayDialogInsert = true;
                this.mode = TheEnum.mode.Insert;
            }
            catch (error) {
                console.log(error);
            }
        },


        /**
         * Hàm đóng dialog thêm mới
         * Author: LTVu (24/12/2022)
         */

        closeDialogInsert() {
            try {
                this.displayDialogInsert = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm mở dialog sửa khi click vào icon sửa
         * Author: LTVu (21/12/2022)
         */
        openDialogUpdate() {
            //chuyển display thành true để hiện trong v-if
            try {
                this.displayDialogUpdate = true;
            }
            catch (error) {
                console.log(error);
            }
        },


        /**
         * Hàm đóng dialog
         * Author: LTVu (21/12/2022)
         */

        closeDialogUpdate() {
            try {
                this.displayDialogUpdate = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm click vào nút sửa 1 dòng dữ liệu
         */
        btnEditOnClick(item) {
            try {
                //Mở dialog
                this.openDialogUpdate();
                this.employeeIdSelected = item.EmployeeId;
            } catch (error) {
                console.log(error);
            }
        },

        /**
         * Hàm mở Dialog xác nhận xóa khi ấn nút xóa ở một dòng
         * Author: LTVu(24/12/2022)
         */
        btnDeleteOnclick(item) {
            try {
                //Mở dialog
                this.displayDialogDelete = true;
                this.employeeIdDelete = item.EmployeeId;
            }
            catch(error)
            {
                console.log(error);
            }
        },

        /**
         * Hàm đóng dialog xáo nhận xóa
         * Author: LTVu (24/12/2022)
         */

        closeDialogDelete() {
            try {
                this.displayDialogDelete = false;
            } catch (error) {
                console.log(error);
            }
        },

    },
    data() {
        return {
            employees: [],
            displayDialogInsert: false,
            displayDialogUpdate: false,
            employeeIdSelected: {},
            displayDialogDelete: false,
            employeeIdDelete:{},
            headingData: TheResource.HeadingData,
            mode: 1,
            displayLoading: false
        }
    },
}
</script>
  
<style scoped>
@import url(../../css/layout/main.css);
</style>
   