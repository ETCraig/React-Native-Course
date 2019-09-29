import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer NpdYnYXVHfTLVwNRAJBGV7fR6HOb02x9YN1CDlhZg8Yez-7gt_ERu_gRh9VMPsgR8giwbty2dbx2IQVIwAodSvVuxhiOMBx8p9s_1ZYKsOfCMvLQPfjX7bClB0mmXXYx'
    }
});