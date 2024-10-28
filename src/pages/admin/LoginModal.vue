<template>
<body>
    <div class="login-container">
        <h1 class="login-title">ITDA 관리자 로그인</h1>
        <form>
            <div class="form-group">
                <label for="id">ID</label>
                <input type="text" id="id" name="id" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="login-box">
                <button type="submit" class="login-button">Login</button>
            </div>
        </form>
    </div>
</body>
</template>

<style scoped>
@import url("/css/login-modal.css");
</style>