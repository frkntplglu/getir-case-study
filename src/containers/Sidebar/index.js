import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCompanies } from "../../actions/companiesActions";
import { sortProducts } from "../../actions/productsActions";
import { getAllTags } from "../../actions/tagsActions";
import {
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DESC,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DESC,
} from "../../actions/types";
import SpinnerIcon from "../../components/Icons/Spinner";
import ScrollableContent from "../../components/ScrollableContent";
import SidebarBox from "../../components/SidebarBox";
import Alert from "../../components/UI/Alert";
import Checkbox from "../../components/UI/Checkbox";
import Input from "../../components/UI/Input";
import Radio from "../../components/UI/Radio";
import theme from "../../styles/theme";
import {
  numberOfProductOfBrand,
  numberOfProductTag,
} from "../../utils/handleNumber";

const SORTING = [
  { id: 1, value: "Price low to high" },
  { id: 2, value: "Price high to low" },
  { id: 3, value: "New to old" },
  { id: 4, value: "Old to new" },
];

const SidebarWrapper = styled.aside`
  flex: 1 0 auto;
  margin-right: 16px;
  max-width: 100%;
  width: 296px;
`;

function Sidebar() {
  const {
    loading: loadingCompanies,
    items: companies,
    error: companiesError,
  } = useSelector((state) => state.companiesList);
  const {
    loading: loadingTags,
    items: tags,
    error: tagsError,
  } = useSelector((state) => state.tagsList);

  const { items: productList } = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllTags());
  }, [dispatch]);

  const handleSorting = (e) => {
    const sortType = e.target.value;
    console.log(e.target.value);
    switch (sortType) {
      case "1":
        dispatch(sortProducts(SORT_BY_PRICE_ASC));
        break;
      case "2":
        dispatch(sortProducts(SORT_BY_PRICE_DESC));
        break;
      case "3":
        dispatch(sortProducts(SORT_BY_DATE_DESC));
        break;
      case "4":
        dispatch(sortProducts(SORT_BY_DATE_ASC));
        break;
      default:
        return;
    }
  };
  const handleInputChange = () => {};
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <SidebarWrapper>
      <SidebarBox title="Sorting">
        {SORTING?.map((sort) => (
          <Radio
            key={sort.id}
            name="sorting"
            labelText={sort.value}
            value={sort.id}
            handleOnChange={handleSorting}
            isDisabled={false}
          />
        ))}
      </SidebarBox>
      <SidebarBox title="Brands">
        <Input
          value=""
          placeholder="Search brand"
          handleOnChange={handleInputChange}
        />
        <ScrollableContent>
          {companiesError ? <Alert type="error">{companiesError}</Alert> : null}
          {loadingCompanies ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            companies.map((company) => (
              <Checkbox
                key={company.slug}
                labelText={company.name}
                value={company.slug}
                handleOnChange={handleChange}
                isDisabled={false}
                extraInfo={numberOfProductOfBrand(productList, company.slug)}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
      <SidebarBox title="Tags">
        <Input
          value=""
          placeholder="Search tag"
          handleOnChange={handleInputChange}
        />
        <ScrollableContent>
          {tagsError ? <Alert type="error">{companiesError}</Alert> : null}
          {loadingTags ? (
            <SpinnerIcon width={64} height={64} fill={theme.colors.mainColor} />
          ) : (
            tags.map((tag) => (
              <Checkbox
                key={tag}
                labelText={tag}
                value={tag}
                handleOnChange={handleChange}
                isDisabled={false}
                extraInfo={numberOfProductTag(productList, tag)}
              />
            ))
          )}
        </ScrollableContent>
      </SidebarBox>
    </SidebarWrapper>
  );
}

export default Sidebar;
