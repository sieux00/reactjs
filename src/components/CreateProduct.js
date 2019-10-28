import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import ServerAPI from '../ServerAPI';

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.onHandleCancel = this.onHandleCancel.bind(this);
    };

    onHandleCancel() {
        this.props.onCancel();
    };

    onHandleSave = async () => {
        await ServerAPI.createProduct(this.refs.name.value, this.refs.price.value)
        
        this.props.onCancel();
    };

	render () {                                            
		return (
                <form className='addForm'>
                    <div className='form-group'>
                        <label>Tên sản phẩm: </label>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='name' 
                            ref='name'
                        >
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Giá: </label>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='price' 
                            ref='price'
                        >
                        </input>
                    </div>
                    {/* <label>Trạng thái: </label>
                    <select 
                        name='isActive' 
                        ref='isActive' 
                        className='form-control'
                    >
                        <option value={false}>Hết hàng</option>
                        <option value={true}>Còn hàng</option>
                    </select> */}

                    <div>
                        <button type='button' className='btn btn-info button' onClick={this.onHandleSave}>Lưu</button>
                        <button type='button' className='btn btn-danger button' onClick={this.onHandleCancel}>Bỏ qua</button>
                    </div>
                </form>
		);
	};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        }
    }
};

export default connect(null, mapDispatchToProps) (CreateProduct);
