import clsx from 'clsx';
import styles from './editShop.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCheck,
    faMessage,
    faPencil,
    faPlus,
    faRightFromBracket,
    faStar,
    faStarHalf,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

const EditUIShop = () => {
    const [isBoss, SetIsBoss] = useState(true);
    const [isEdit, SetIsEdit] = useState(true);
    const [isEditName, SetIsEditName] = useState(false);
    const [options, setOptions] = useState([
        'Home',
        'All Products',
        'Sản phầm bán chạy',
        'Sản phầm mới',
    ]);
    const [dragOption, setDragOption] = useState('');
    const [optionChose, setOptionChose] = useState('');
    const [openEditOptions, setOpenEditOptions] = useState([]);
    const [numOfCol, setNumOfCol] = useState(new Array(6).fill(true));

    const handleOnDragStart = (event, option) => {
        // console.log(event.target.classList.);
        event.target.classList.add('editBorderDotted');
        setDragOption(option);
    };

    const handleOnDragOver = (event, index) => {
        if (event.target.classList.contains('moveOption'))
            event.target.classList.add('editBorderDotted');
        const draggedOverItem = options[index];

        // if the item is dragged over itself, ignore
        if (dragOption === draggedOverItem) {
            return;
        }

        const elements = document.querySelectorAll('.editBorderDotted');
        elements.forEach((element) => {
            element.classList.remove('editBorderDotted');
        });

        // filter out the currently dragged item
        let items = options.filter((options) => options !== dragOption);

        // add the dragged item after the dragged over item
        items.splice(index, 0, dragOption);

        setOptions(items);
    };

    const handleOnDragEnd = (event) => {
        setDragOption('');
        const elements = document.querySelectorAll('.editBorderDotted');
        elements.forEach((element) => {
            element.classList.remove('editBorderDotted');
        });
    };

    const handleOpenEditOption = (index) => {
        const opens = [...openEditOptions];
        opens[index] = !opens[index];
        setOpenEditOptions(opens);
    };

    const handleChangeOptionText = (e, index) => {
        const optionsText = [...options];
        optionsText[index] = e.target.value;
        setOptions(optionsText);
    };

    const handleAddNewOption = () => {
        const currentOptions = [...options];
        currentOptions.push(`New Option ${options.length}`);
        setOptions(currentOptions);
    };

    const handleRemoveOption = () => {};

    useEffect(() => {
        setOpenEditOptions(new Array(options.length).fill(false));
    }, []);

    return (
        <div className={clsx(styles.editUIShop)}>
            <div className={clsx(styles.editUIShop__header)}>
                <div className="container">
                    <div className={clsx(styles.editUIShop__header__inner)}>
                        <div className={clsx(styles.editUIShop__header__brand)}>
                            <div className={clsx(styles.brand__inner)}>
                                <div className={clsx(styles.editUIShop__image)}>
                                    <img src="/images/MB.png" className="img__fluid" alt="" />
                                </div>
                                <div className={clsx(styles.editUIShop__info)}>
                                    {!isEditName && (
                                        <div className={clsx(styles.editUIShop__name)}>
                                            MixiGaming - Official Store
                                            {isEdit && (
                                                <span onClick={() => SetIsEditName(true)}>
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className={clsx(styles.editUIShop__time_connect)}>
                                        Active 4 minutes ago
                                    </div>
                                    <div className={clsx(styles.editUIShop__follows)}>
                                        <div className={clsx(styles.btnFollow)}>
                                            <span>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </span>
                                            FOLLOW
                                        </div>
                                        <div className={clsx(styles.btnFollow)}>
                                            <span>
                                                <FontAwesomeIcon icon={faMessage} />
                                            </span>
                                            CHAT
                                        </div>
                                        <div className={clsx(styles.btnFollow)}>
                                            <span>
                                                <FontAwesomeIcon icon={faRightFromBracket} />
                                            </span>
                                            BACK
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={clsx(styles.editUIShop__header__img)}
                                style={{
                                    backgroundImage: 'url("/images/PC.png")',
                                }}
                            ></div>
                            <div className={clsx(styles.editUIShop__header__bg)}></div>
                        </div>
                    </div>
                    <div className={clsx(styles.editUIShop__header__optionsBar)}>
                        {options.map((option, i) => {
                            return (
                                <div
                                    className={clsx(styles.option, 'moveOption')}
                                    draggable
                                    onDragStart={(e) => handleOnDragStart(e, option)}
                                    onDragOver={(e) => handleOnDragOver(e, i)}
                                    onDragEnd={handleOnDragEnd}
                                    key={i}
                                >
                                    {openEditOptions[i] && (
                                        <input
                                            type="text"
                                            className={clsx('form-control', styles.optionInput)}
                                            value={options[i]}
                                            onChange={(e) => handleChangeOptionText(e, i)}
                                        />
                                    )}
                                    {!openEditOptions[i] && (
                                        <div className={clsx(styles.optionText)}>{option}</div>
                                    )}
                                    <div className={clsx(styles.option__delete)}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                    {!openEditOptions[i] && (
                                        <div
                                            className={clsx(styles.option__edit)}
                                            onClick={() => handleOpenEditOption(i)}
                                        >
                                            <FontAwesomeIcon icon={faPencil} />
                                        </div>
                                    )}
                                    {openEditOptions[i] && (
                                        <div
                                            className={clsx(styles.option__edit)}
                                            onClick={() => handleOpenEditOption(i)}
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <div
                            className={clsx(styles.option, styles.optionPlus)}
                            onClick={handleAddNewOption}
                        >
                            <div className={clsx(styles.optionText)}>
                                <FontAwesomeIcon icon={faPlus} /> Add New
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.editUIShop__body)}>
                <div className="container">
                    <div className={clsx(styles.editUIShop__body__block)}>
                        <div className={clsx(styles.editUIShop__body__section)}>
                            <div className={clsx(styles.section__header)}>
                                <div className={clsx(styles.section__header__title)}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUIShop;
