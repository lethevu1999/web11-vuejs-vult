<template>
    <div class="dialog-delete-container">
        <div class="dialog-delete">
            <div class="button-close" @click="closeDialog"></div>
            <div class="dialog-delete-top">Thông báo</div>
            <div class="dialog-delete-center">Bạn có chắc chắn muốn xóa Cán bộ giáo viên đang chọn không?</div>
            <div class="dialog-delete-bottom">
                <div class="dialog-delete-button dialog-close" @click="closeDialog">Đóng</div>
                <div class="dialog-delete-button dialog-submit" @click="btnDeleteOnClick">Đồng ý</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    name: "TheEmployeeDelete",
    props: ["employeeId"],
    created(){
        console.log(this.employeeId);
    },
    methods:
    {
        /**
         * Hàm đóng dialog xác nhận xóa gọi từ parent
         * Author: LTVu (24/12/2022)
         */
        closeDialog()
        {
            this.$emit("onClose")
        },

        /**
         * Hàm xóa nhân viên
         * Author: LTVu (24/12/2022)
         */

        btnDeleteOnClick()
        {
            const me = this;
            //Gọi api xóa
            axios.delete(`https://amis.manhnv.net/api/v1/Employees/${me.employeeId}`)
            .then((res) => {
                console.log(res);
                me.$emit("loadData");
                this.closeDialog();
            })
            .catch((error) => {
                console.log(error);
            }) 
        }
    },
}
</script>
<style scoped>
@import url(../../css/layout/dialog-delete.css);
</style>